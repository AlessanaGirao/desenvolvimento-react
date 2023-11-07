import React, { useContext, useState } from 'react';
import { CartContext } from '@/app/contexts/CartContext';
import Appbar from '@/app/components/Appbar';
import Bottom from '@/app/components/Bottom';
import Drawer from '@/app/components/Drawer';
import '@/app/styles/CartPage';

import 'tailwindcss/tailwind.css';

const CartPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleMenuToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

   
    searchProduct(term);
  };

  const searchProduct = (searchTerm) => {
    fetch(`http://localhost:3000/products/search/${searchTerm}`)
      .then((response) => response.json())
      .then((products) => {
        setSearchResults(products);
      })
      .catch((error) => console.error("Error searching for products: ", error));
  };
  
  return (
  <div>
    <Appbar onMenuToggle={handleMenuToggle}></Appbar>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          id="product-search"
          placeholder="Digite o nome do produto"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ height: '40px', width: '220px', borderRadius: '10px', backgroundColor: 'lightgray' }}
        />
        <button onClick={() => searchProduct(searchTerm)}>
          <div className='font-mono font-semibold text-lg text-black hover:text-purple-500 flex items-center'>
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              style={{ marginLeft: '10px' }}
            >
              <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018z" />
              <path d="M13 6.5a6.471 6.471 0 01-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1.007 1.007 0 01-.1-.115h.002A6.5 6.5 0 1113 6.5zM6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11z" />
            </svg>
          </div>
        </button>
      </div>
      <ul>
        {searchResults.map((product, index) => (
          <li key={index}>
            <a href={`/product/${product.id}`}>
              <img src={product.imageUrl} alt={product.title} />
              {product.title} - Price: ${product.price}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
    <Bottom></Bottom>
  </div>
);
};

export default CartPage;