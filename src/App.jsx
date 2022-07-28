import React, { useState } from 'react';
import './App.css';
import productData from './products.json';
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState(productData);

    const  deleteProduct= (id) =>{

        const filtered = products.filter(elem => elem._id !== id)
      setProducts(filtered)
          }
          const handleSearch = (e) => {
            if (e.target.value === '') {
              setProducts(productData);
            } else {
              const filtered = productData.filter(elem => elem.name.toLowerCase().includes((e.target.value).toLowerCase()));
              setProducts(filtered);
            }
          }
      
  return (
    
    <div className="cart">

      <h1>My shopping cart</h1>    
      ,<input type="text" placeholder='Search'  onChange={handleSearch} />
 
        {products.map((e)=>{
          console.log(e)
          return (
          <ProductCard  id={e._id} name={e.name} />
          )
         
        })}

    </div>
  );
}

export default App;
