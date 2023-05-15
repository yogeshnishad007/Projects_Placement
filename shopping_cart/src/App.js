
import './App.css';
import {Routes,Route,Link} from "react-router-dom"
import ProductDetails from "./components/ProductDetails"
import CartProducts from "./components/CartProducts";
import SingelProduct from "./components/SingelProduct"
import { Box,Heading,Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

function App() {
  
const Data=useSelector(el=> el.Cart)

  return (
    <div className="App">
          
       
        <Box bgColor="orange" height="50px">
        <Flex justifyContent="space-around"  mt={6}>
          <Box >
              <Heading size="lg">

                 <Link to="/">ALL PRODUCT</Link>
            </Heading>
          </Box>

          <Box >
              <Heading size="lg">

                 <Link to="/">CART {Data.length}</Link>
            </Heading>
          </Box>

             <Box>
                <Heading  size="lg">

                    <Link to="/cart">CART PRODUCT</Link>
                </Heading>
            </Box>
            </Flex>
          </Box>  
      


             <Routes>
          
                <Route path="/" element={<ProductDetails/>}/>
              
                <Route path="/singal/:id" element={<SingelProduct/>}/>
                <Route path="/cart" element={<CartProducts/>}/>
               
             
                </Routes>

            

           
             
                 
    </div>
  );
}

export default App;
