import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Button } from '@mui/material';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '70px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '500px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '500px',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar sx={{backgroundColor: "#091625" , height: "80px"}}>
          <Button 
            aria-label="Logo" 
            variant='text' 
            sx={{
                  marginLeft:' 60px', 
                  marginRight: '40px',
                  backgroundColor: '#CED0D3', 
                  color:'#848A92',
                  borderRadius: '0px',
                  maxHeight: '35px',
                  maxWidth: '130px',
                  // display: 'flex',
                  flexGrow: 1
                }}
          >
            <h6>LOGO</h6  >
          </Button>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex', md: 'flex', justifyContent: 'center', alignItems: 'center'} }}>
            <IconButton 
              aria-label="Sign in" 
              
              size="large"
              edge="end"
              color="inherit"
            >
  
              <PermIdentitySharpIcon/>
              <Box sx={{display: {xs: 'none', md:'flex'}}} style={{fontSize: '0.5em', padding: '0.3em'}}> Sign In </Box>
              
            </IconButton>
            <IconButton 
              aria-label="Sign in" 
              // onClick={{}}
              size="large"
              edge="end"
              color="inherit"
            >
  
              <ShoppingBagOutlinedIcon/>
              <Box sx={{display: {xs: 'none', md:'flex'}}} style={{fontSize: '0.5em', padding: '0.3em'}}> Cart </Box>
              
            </IconButton>
          </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
