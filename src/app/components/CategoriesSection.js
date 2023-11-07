// components/CategoriesSection.js
import React, { useState, useEffect } from 'react';

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);

  function searchProduct() {
    const searchTerm = document.getElementById("product-search").value;

    fetch(`http://localhost:3000/products/search/${searchTerm}`)
      .then(response => response.json())
      .then(products => {
        const productList = document.getElementById("product-list");
        productList.innerHTML = "";

        products.forEach(product => {
          const li = document.createElement("li");
          li.textContent = `${product.title} - Price: $${product.price}`;
          productList.appendChild(li);
        });
      })
      .catch(error => console.error("Error searching for products: ", error));
  }

  return (
    <div>
      {/* Your JSX for the categories section */}
      <input
        type="text"
        id="product-search"
        placeholder="Search for products"
      />
      <button onClick={searchProduct}>Search</button>
      <ul id="product-list">
        {/* This is where the search results will be displayed */}
      </ul>
    </div>
  );
}

export default CategoriesSection;
