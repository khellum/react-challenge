import React, {useState, useEffect} from 'react';
import { Box } from '@mui/system';
import {data} from './data'
import "react-unique-key" ;
import CartCard from './cartCard';
import { v4 as uuidv4 } from 'uuid';
// import { display } from '@mui/system';

export default function MultiActionAreaCard({setProductsInCart, setTotalToPay}) {
  
  const [cartItems, setCartItems] = useState(data)
  
  useEffect(() =>{
    let Total = 0
    let count = 0
    cartItems.forEach(cartItem => {
      Total += cartItem.price * cartItem.quantity
      count++
    });
    setProductsInCart(count)
    setTotalToPay(Total.toFixed(2))
  }, [cartItems, setProductsInCart, setTotalToPay] )

  const handleChangeCartItem = (temporalCartItem) => {
    //console.log(temporalCartItem)
    let Total = 0
    let count = 0
    let temporalCart = []
    cartItems.forEach(cartItem => {
      if(cartItem.name !== temporalCartItem.name){
        Total += cartItem.price * cartItem.quantity
        count++
        temporalCart.push(cartItem)
      }
      else {
        Total += temporalCartItem.price * temporalCartItem.quantity
        count++
        temporalCart.push(temporalCartItem)
      }
    });
    setProductsInCart(count)
    setTotalToPay(Total.toFixed(2))
    setCartItems(temporalCart)
  }

  const handleRemoveItem = (itemName) => {
    // console.log(itemName)
    let Total = 0
    let count = 0

    let items = cartItems.filter(cartItem => {
      if(cartItem.name !== itemName){
        Total += cartItem.price * cartItem.quantity
        // console.log(cartItem.price * cartItem.quantity)
        count++
      }
      return cartItem.name !== itemName
    })
    setProductsInCart(count)
    setTotalToPay(Total.toFixed(2))
    setCartItems(items)
  }

  return (
    
      <Box sx={{display:'flex', flexDirection:'column',flexWrap:'nowrap', gap:1, flexGrow:1}}>
        {cartItems.map(cartItem => {
          return (
            <CartCard key={uuidv4()}
            cartItem={cartItem}
            handleRemoveItem={handleRemoveItem}
            handleChangeCartItem={handleChangeCartItem}
            />
          )
        })
      }
    </Box>
  );
}
