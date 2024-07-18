import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteAsync,
  fetchAsync,
  updateAsync
} from './cartSlice';
import './Cart.css';

export function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(state=>state.cart.items);

  const handleChange = (e,id) => {
    console.log(e.target.value);
    dispatch(updateAsync({id, change:{quantity:+e.target.value}}))
  }
 
  return (
    <div>
    
        
        {/* ---Cart---  */}
        {items.map((item)=>
        <div className='cartItem'>
         {/* <p>{item.description}</p> */}
         {/* <p>{item.id}</p> */}
         <h3>{item.title}</h3>
         <h3>${Math.round(item.price*10)/10}</h3>
         <img src={item.thumbnail} className='cartImg'/>
         <div className='quantity'>
          Qty: 
          <select value={item.quantity} onChange={(e) => handleChange(e,item.id)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
          </div>
          <span>
            <button onClick={()=>dispatch(deleteAsync(item.id))}>X</button>
          </span>
        </div>
        )}
        
        <h3>Total: ${Math.round(items.reduce((acc,item)=>item.price*item.quantity + acc ,0)*10)/10}</h3>
      </div>
  );
}
