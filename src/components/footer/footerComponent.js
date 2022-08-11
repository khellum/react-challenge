import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { US } from 'country-flag-icons/react/3x2'

const FooterComponent = () => {
    return(
        <Box
            sx={{ 
                display:'flex',
                flexDirection:'column',
                marginTop:'10em',
                backgroundColor:'#E6E8E9'
            }}
        >
            <Box 
                sx={{
                        display:'flex', 
                        marginLeft:'4em', 
                        marginTop:'3em',
                        gap:'0em 5em', 
                        // backgroundColor:'#E6E8E9'
                    }}>
                <Box sx={{display:'flex', flexDirection:'column', width:'20%'}}>
                <Button 
                    aria-label="Logo" 
                    // variant='text' 
                    sx={{
                        // marginLeft:' 60px', 
                        // marginRight: '40px',
                        marginBottom:'1em',
                        backgroundColor: '#CED0D3', 
                        color:'#848A92',
                        borderRadius: '0px',
                        maxHeight:'50px',
                        height: '50px',
                        width: '140px',
                        // display: 'flex',
                        flexGrow: 1
                        }}
                >
                    <h6>LOGO</h6  >
                </Button>
                    <p>We sell custom products for all your needs. Packs and bulk products that you will enjoy.</p>
                    <Box sx={{display:'flex', alignItems:'center'}}>
                         <CallIcon/>
                        <p style={{marginLeft:'0.5em'}}>+1-202-555-0129</p>
                    </Box>
                    <Box>
                        <FacebookIcon /> 
                        <TwitterIcon /> 
                        <InstagramIcon />
                        <LinkedInIcon />
                        <YouTubeIcon />
                    </Box>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', width:'20%', justifyItems:'start'}}>
                    <p>Our company</p>
                    <p>About us</p>
                    <p>FAQ</p>
                    <p>Partnerships</p>
                    <p>Sustainability</p>
                    <p>Blog</p>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', width:'20%'}}>
                    <p>How can we help</p>
                    <p>Place a ticket</p>
                    <p>Track your order</p>
                    <p>Help center</p>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', width:'20%'}}>
                    <p>Information</p>
                    <p>Contact us</p>
                    <p>Privacy</p>
                    <p>Terms of use</p>
                </Box>
            </Box>
            <Box sx={{display:'flex', justifyContent:'space-between', margin:'2em'}}>
                <p>© 2022 Customer Products. All rights reserved.</p>
                <Box sx={{display:'flex', gap:'1em'}}>
                    <Box sx={{display:'flex', alignItems:'center'}}>
                        <p>Region: </p> 
                        <US title="United States" style={{width:'18px', margin: '0 2px'}}/> 
                        <p>United States </p>
                        <KeyboardArrowDownIcon />
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center'}}>
                        <p>Language: English </p> 
                        <KeyboardArrowDownIcon />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default FooterComponent