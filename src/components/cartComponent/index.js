import React, { useState } from "react";
import { Box } from "@mui/system";
import MultiActionAreaCard from "./cartCard/index.js";
import OrderSummary from "./orderSummary/index.js";

const CartComponent = () => {
    const [productsInCart, setProductsInCart] = useState(0)
    const [totalToPay, setTotalToPay] = useState(0)

    return(
        <Box sx={{margin: '10px 4em', flexGrow:'1'}}>
            <Box sx={{display:'flex'}}>
                <Box sx={{display:'flex', flexDirection:'column', flexGrow:'1'}}>
                <h2>Your Cart ({productsInCart})</h2> 
                    <MultiActionAreaCard 
                        setProductsInCart={setProductsInCart} 
                        setTotalToPay={setTotalToPay} 
                        flexGrow='1'
                    />
                    {/* <Box sx={{flexGrow:'1'}}/> */}
                </Box>
                <Box >
                    <OrderSummary productsInCart={productsInCart} totalToPay={totalToPay}/>
                </Box>
            </Box>
        </Box>
    )
}

export default CartComponent