from django.db import models

class Product(models.Model):
    category = models.CharField(max_length=255)
    url = models.URLField()
    image_url = models.URLField()
    title = models.CharField(max_length=255)
    price = models.CharField(max_length=255)
    mrp = models.CharField(max_length=255)
    last_7_day_sale = models.IntegerField(null=True, blank=True)
    fit = models.CharField(max_length=255, null=True, blank=True)
    fabric = models.CharField(max_length=255, null=True, blank=True)
    neck = models.CharField(max_length=255, null=True, blank=True)
    sleeve = models.CharField(max_length=255, null=True, blank=True)
    pattern = models.CharField(max_length=255, null=True, blank=True)
    length = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title
