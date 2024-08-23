"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

function CategoryPage({ params }) {
  const [products, setProducts] = useState([]);

  const { category } = params;

  useEffect(() => {
    async function fetchProducts() {
      try {
        console.log("Fetching products for category:", category);
        const res = await fetch(
          `http://127.0.0.1:8000/api/products/?category=${category}`
        );
        console.log(
          "Fetch URL:",
          `http://127.0.0.1:8000/api/products/?category=${category}`
        );
        if (res.ok) {
          const data = await res.json();
          console.log("Fetched products:", data); // Debugging line
          setProducts(data);
        } else {
          console.error(
            "Failed to fetch products:",
            res.status,
            res.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, [category]);
  return (
    <div>
      <h1>{category} Products</h1>
      <ul>
        {products.length > 0 ? (
          products.map((product) => <li key={product.id}>{product.title}</li>)
        ) : (
          <p>No products found.</p>
        )}
      </ul>
    </div>
  );
}

export default CategoryPage;
