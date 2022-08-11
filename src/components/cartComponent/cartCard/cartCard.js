import React, {Fragment, useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, TextField } from '@mui/material';
import tShirt from '../../../asets/t-shirt.png';
import bottle from '../../../asets/bottle.png';
import boxes from '../../../asets/boxes.png';
import { Box } from '@mui/system';
import { v4 as uuidv4 } from 'uuid';

const CartCard = ({cartItem, handleRemoveItem, handleChangeCartItem}) => {
    const [quantity, setQuantity] = useState(cartItem.quantity)
    
    const handleOnChangeQuantity = (e) => {
        setQuantity(Number(e.target.value))
        // console.log(e.target.value)
        // console.log(quantity)


        let temporalCartItem = {...cartItem, quantity: Number(e.target.value)}
        handleChangeCartItem(temporalCartItem)
    }
    return(
        <Card key={uuidv4()}
            //onChange={()=> handleChangeCartItem(cartItem)}
            sx={{ 
                
                display: 'flex', 
                flexDirection: 'row', 
                flexWrap:'nowrap', 
                marginLeft: '30px'
            }}>
              <CardActionArea component='div' sx={{display:'flex', flexWrap:'nowrap', justifyContent:'left'}}>
                <Box sx={{display: 'flex', flexWrap: 'nowrap', justifyContent: 'left'}}>  
                  <Box >
                    <Box 
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        width: '120px',
                        height: '120px',
                        minWidth:'100px',
                        minHeight:'100px',
                        backgroundColor: '#E6E8E9',
                        justifyContent: 'center',
                        gap: '10px',
                        // padding: '10px' 
                      }}>

                      {(cartItem.type === 'pack')?<Fragment>  
                        <CardMedia
                          component="img"
                          sx= {{height:"55px", width:'auto'}}
                          image={boxes}
                          alt="green iguana"
                        />
                        
                        <CardMedia
                          component="img"
                          sx= {{height:"55px", width:'auto'}}
                          image={tShirt}
                          alt="green iguana"
                        />
                        
                        <CardMedia
                          component="img"
                          sx= {{height:"55px", width:'auto'}}
                          image={bottle}
                          alt="green iguana"
                        />
                      </Fragment> : null}
                    
                    </Box>
                  
                    {cartItem.type === 'pack' ? 
                      <Typography variant="body2" color="#848A92" sx={{textAlign: 'center', padding:'10px'}}>PACK</Typography>
                      :
                      null
                    }
                  </Box>
                  <Box>
                    <CardContent >
                      <Typography gutterBottom variant="h6" component="div">
                        {cartItem.name}
                      </Typography>
                      <Typography component='div' variant="body1" color="text.secondary" 
                        sx={{
                                display:'flex', 
                                // justifyContent:'center', 
                                flexWrap:'nowrap',
                                justifyContent:'left'
                            }} >
                        <p>
                            Quantity:
                        </p> 
                        <TextField component='div'
                          id="standard-number"
                          
                          type="number"
                          onChange={handleOnChangeQuantity}
                          value={quantity}
                          InputProps={{
                            inputProps: { 
                                min: 0 
                            }
                            }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          sx={{width:'50px', paddingTop:'12px', marginLeft:'5px'}}
                          variant="standard"
                        />
                          
                      </Typography>
                      {
                        (cartItem.type === 'pack') ? 
                        <ul>
                          {cartItem.items.map(product => {
                            return <li key={uuidv4()}> {product.name}: ({product.description})</li>
                          })}
                        </ul> : 
                              null
                      }
                    </CardContent>
                    <CardActions>
                      {
                        (cartItem.type === 'pack') ? 
                        <Button size="small" color="primary">
                          Edit Pack
                        </Button> : 
                                    null
                      }
                      <Button size="small" color="primary" onClick={() => handleRemoveItem(cartItem.name)}>
                        Remove
                      </Button>
                    </CardActions>
                  </Box>
                </Box>
                <Box sx={{flexGrow:'2'}}/>
                <Box sx={{
                    display:'flex', 
                    flexWrap:'nowrap',  
                    minWidth:'130px', 
                    flexDirection:'column', 
                    justifyContent:'flex-start',
                    alignItems:'start',
                    height: '100%'
                  }}>
                  <Box sx={{margin:'20px'}}>
                    <Typography variant="body1" color="text.secondary" textAlign='right'>
                        ${cartItem.price}   
                    </Typography>
                    <Typography variant="body1" color="text.secondary" textAlign='right'>
                        Total: ${(cartItem.price * cartItem.quantity).toFixed(2)}   
                    </Typography>
                  </Box>
                </Box>
              </CardActionArea>
            </Card>
    )
}

export default CartCard