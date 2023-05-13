
import './App.css';
import {Routes,Route,Link} from "react-router-dom"
import ProductDetails from "./components/ProductDetails"
import CartProducts from "./components/CartProducts";
import SingalProduct from "./components/SingalProduct"

function App() {
  return (
    <div className="App">
          
          <div style={{display:"flex", justifyContent:"space-around"}}>
            <h2>

              <Link to="/">ALL PRODUCT</Link>
            </h2>
           
           <h2>

           <Link to="/cart">CART PRODUCT</Link>
           </h2>
            
             </div>

             <Routes>
          
                <Route path="/" element={<ProductDetails/>}/>
              
                <Route path="/singal/:id" element={<SingalProduct/>}/>
                <Route path="/cart" element={<CartProducts/>}/>
               
             
                </Routes>

            

           
             
                 
    </div>
  );
}

export default App;
