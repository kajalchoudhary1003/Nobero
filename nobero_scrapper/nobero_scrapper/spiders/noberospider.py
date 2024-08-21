import scrapy
import re
from products.models import Product
from asgiref.sync import sync_to_async


class NoberospiderSpider(scrapy.Spider):
    name = "noberospider"
    allowed_domains = ["nobero.com"]
    start_urls = ["https://nobero.com/pages/men"]

    def parse(self, response):
        category_urls = response.css('div.custom-page-season-grid-item a::attr(href)').getall()
        for url in category_urls:
            clean_url = url.strip()
            category_name = url.split('/')[-1].replace('-', ' ').title()
            yield response.follow(clean_url, self.parse_category, meta={'category': category_name})
    
    def parse_category(self, response):
        category = response.meta['category']
        product_urls = response.css('section.product-card-container div a::attr(href)').getall()
        for url in product_urls:
            clean_url = url.strip()
            yield response.follow(clean_url, self.parse_product, meta={'category': category})
    async def parse_product(self, response):
        category = response.meta['category']
        product = Product(
            category= category,
            url =response.url,
            image_url= self.extract_image_url(response),
            title= response.css('main h1.capitalize::text').get().strip(),
            price= response.css('main h2#variant-price spanclass::text').get().strip(),
            mrp= response.css('main h2.font-intermediumtext-sm').get().replace('<h2 class="font-intermediumtext-sm md:text-base text-[#676767]">\n      MRP:\n      <span id="variant-compare-at-price" class="line-through"><spanclass>','').replace('</spanclass></span>\n    </h2>', ''),
            last_7_day_sale= self.extract_last_7_day_sale(response),
            fit= self.extract_metafield(response, "Fit"),
            fabric= self.extract_metafield(response, "Fabric"),
            neck= self.extract_metafield(response, "Neck"),
            sleeve= self.extract_metafield(response, "Sleeve"),
            pattern= self.extract_metafield(response, "Pattern"),
            length= self.extract_metafield(response, "Length"),
            description= self.extract_description(response),
            
        )
        await sync_to_async(product.save)()
    def extract_last_7_day_sale(self, response):
        raw_text = response.css('main div.product_bought_count span::text').get()
        if raw_text:
            # Use a regular expression to find the first number in the text
            match = re.search(r'\d+', raw_text)
            if match:
                return int(match.group())  # Convert the matched number to an integer
        return None  # Return None if no number is found
    
    def extract_metafield(self, response, field_name):
        # Iterate through each div with class 'product-metafields-values'
        for metafield in response.css('main div.product-metafields-values'):
        # Check if the h4 tag's text matches the field_name (e.g., "Fit")
            if metafield.css('h4::text').get().strip() == field_name:
            # Return the corresponding p tag's text (e.g., "Oversized Fit")
                return metafield.css('p::text').get().strip()
        return None  # Return None if the field is not found
    
    def extract_description(self, response):
         # Extract all text from the first <p> tag within the description div using CSS selectors
        description_parts = response.css('main div.product-description p:first-of-type *::text').getall()
        # Join the text parts into a single string
        description = ' '.join(description_parts).strip()
        return description if description else None
    
    def extract_image_url(self, response):
        # Extract the src attribute from the img tag within the figure tag
        image_url = response.css('main figure#image-container img::attr(src)').get()
        
        # Construct the full URL if it's relative
        if image_url and image_url.startswith("//"):
            image_url = "https:" + image_url
        
        return image_url if image_url else None
    