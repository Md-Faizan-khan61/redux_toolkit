import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchAsync
} from './productsSlice';
import './Products.css';
import { addAsync } from '../cart/cartSlice';

export function Products() {
  const dispatch = useDispatch();
  const products = useSelector(state=>state.product.products);

  useEffect(()=>{
    dispatch(fetchAsync())
  },[])
  return (
    <div>
    
        {/* <button
         
          aria-label="Decrement value"
          onClick={() => dispatch(fetchAsync())}
        >
          Fetch
        </button> */}
        {/* ---Card---  */}
        <div>
        {products.map((product)=>
          <div className="card">
          <img src={product.thumbnail} alt={product.category} style={{width:"100%"}}/>
            <h1>{product.title}</h1>
            <p className="price">${product.price}</p>
            <p>{product.description}</p>
            <p><button  onClick={() => dispatch(addAsync(product))}>Add to Cart</button></p>
        </div>
        )}
        </div>
        
      </div>
  );
}
