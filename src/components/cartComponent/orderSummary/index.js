import { Box } from "@mui/material";
import React from "react";
import { Button } from '@mui/material';
const OrderSummary = ({productsInCart, totalToPay}) =>{
    return(
        <Box sx={{display:'flex', flexDirection: "column", margin: '0px 4em'}}>
            <h2>Order Summary</h2>
            <Box sx={{display:'flex', color:'#6B737C'}}>
                <p>Number of items: </p> 
                <Box flexGrow='1'></Box>
                <p>{productsInCart}</p>
            </Box>
            <Box sx={{display:'flex'}}>
                <h3>Total: </h3> 
                <Box flexGrow='1'></Box>
                <h3>${totalToPay}</h3>
            </Box>
            <Button variant="contained" disableElevation 
                sx={{
                        width:'100%',
                        margin:'4px', 
                        backgroundColor:'#3A4451'
                    }}>
                Proceed to checkout
            </Button>
            <Button variant="outlined" disableElevation 
                sx={{
                        margin:'4px',
                        width : '100%',
                        color:'#3A4451', borderColor: '#3A4451'
                    }}>
                Continue to shoping
            </Button>
        </Box>
    )
}

export default OrderSummary