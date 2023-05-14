
import './App.css';
import {Routes,Route,Link} from "react-router-dom"
import ProductDetails from "./components/ProductDetails"
import CartProducts from "./components/CartProducts";
import SingelProduct from "./components/SingelProduct"
import { Box,Heading,Flex } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
          
       <Flex justifyContent="space-around"  mt={6}>
          <Box>
              <Heading size="lg">

                 <Link to="/">ALL PRODUCT</Link>
            </Heading>
          </Box>

            <Box>
                <Heading  size="lg">

                    <Link to="/cart">CART PRODUCT</Link>
                </Heading>
           </Box>
            
        </Flex>


             <Routes>
          
                <Route path="/" element={<ProductDetails/>}/>
              
                <Route path="/singal/:id" element={<SingelProduct/>}/>
                <Route path="/cart" element={<CartProducts/>}/>
               
             
                </Routes>

            

           
             
                 
    </div>
  );
}

export default App;
