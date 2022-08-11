import React from "react";
import { Box } from "@mui/material";

const SugerenceComponent = () => {

    const myCard = (
        <Box 
            sx={{
                display:'flex',
                flexDirection:'column', 
                // alignItems:'center', 
                 width:'290px', 
                // height:'170px'
            }}>
                <Box
                    sx={{
                        display:'flex',
                        //flexWrap: 'nowrap', 
                        // justifyContent:'space-between', 
                        width:'100%', 
                        height:'250px',
                        backgroundColor:'#E6E8E9'
                    }}>
                    
                
                </Box>
                <Box>
                    <h5>Unisex Short Sleeve T-Shirt</h5>
                    <Box sx={{display:'flex', justifyContent:'space-between', height: '1em'}}>
                        <h5>$10 - $24</h5>
                        <h5 style={{color:'gray '}}>Minimum: 24</h5>
                    </Box>
                </Box>
            </Box>
    )

    return(
        <Box sx={{margin:'2em 4em'}}>
            <h2>You might also like</h2>
            <Box sx={{display: 'flex', gap: '20px', flexWrap:'wrap'}}>
                {myCard}
                {myCard}
                {myCard}
                {myCard}
            </Box>
        </Box>
    )
}

export default SugerenceComponent