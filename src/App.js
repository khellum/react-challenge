import React, {Fragment} from "react";
import PrimarySearchAppBar from "./components/appBar/index";
import CartComponent from "./components/cartComponent";
import NavBar from "./components/navBar";
// import { Button } from "@mui/material";
import SugerenceComponent from "./components/sugerenceComponent/sugerenceComponent";
import FooterComponent from "./components/footer/footerComponent";

function App() {
  
  return (
    <Fragment>
      <PrimarySearchAppBar/>
      <NavBar />
      <CartComponent/>
      <SugerenceComponent/>
      <FooterComponent />    
    </Fragment>
  );
}

export default App;
