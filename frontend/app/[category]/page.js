'use client'
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'

function CategoryPage({params}) {
    const [products,setProducts] = useState([]);

    const {category} = params;

    useEffect(() => {
        async function fetchProducts() {
          try {
            const res = await fetch(`http://127.0.0.1:8000/api/products/?category=${category}`);
            const data = await res.json();
            setProducts(data);
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
          {products.map(product => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
    </div>
  )
}

export default CategoryPage