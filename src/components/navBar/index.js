import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        sx={{backgroundColor: "#E6E8E9", width: '100vw', justifyContent:'left', margin:'3px', padding:'3px'}}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="All Products" sx={{maxWidth:'110px'}} />
        <BottomNavigationAction label="Packaging"    sx={{maxWidth:'110px'}}/>
        <BottomNavigationAction label="Drinkware"    sx={{maxWidth:'110px'}}/>
        <BottomNavigationAction label="Apparel"      sx={{maxWidth:'110px'}}/>
        <BottomNavigationAction label="Notebooks"    sx={{maxWidth:'110px'}}/>
        <BottomNavigationAction label="Backpacks"    sx={{maxWidth:'110px'}}/>

      </BottomNavigation>
    </Box>
  );
}
