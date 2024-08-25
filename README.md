# Nobero Project

This repository contains a web scraping tool, a Django backend, and a Next.js frontend. The project is designed to scrape product data from the Nobero website, store the data in a Django-based API, and display it in a React-based frontend.

## Project Structure

- **nobero_scraper**: Contains the Scrapy spider for scraping product data from the Nobero website.
- **backend**: Contains the Django project that stores the scraped data and provides an API for the frontend.
- **frontend**: Contains the Next.js project for displaying the scraped data on a web interface.

## Features

- **Web Scraping**: The Scrapy spider scrapes product details from the Nobero website, including categories, titles, prices, and other specifications.
- **API**: The Django backend serves the scraped data through RESTful API endpoints.
- **Frontend**: The Next.js frontend fetches data from the API and displays it in a user-friendly interface.

## Setup Instructions

### Prerequisites

- Python 3.12.5
- Node.js
- npm or Yarn
- Django
- Scrapy

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kajalchoudhary1003/Nobero.git
   cd Nobero

2. **Set up the Scrapy Spider:**
   ```bash
   cd nobero_scraper
   pip install -r requirements.txt

3. **Set up the Django Backend:**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver

4. **Set up the Next.js Frontend:**
   ```bash
   cd frontend
   npm install  # or yarn install
   npm run dev  # or yarn dev

5. **Running the Scraper:**
   ```bash
   scrapy crawl nobero_spider



