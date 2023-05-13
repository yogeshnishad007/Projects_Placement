
import React,{useEffect, useState} from 'react'
import axios from "axios"
import {useDispatch,useSelector} from "react-redux"
import { cartProduct, getProduct } from '../redux/action'

const ProductDetails = () => {

  
  const[item,setItem]=useState([])
const dispatch=useDispatch()



const data=useSelector((el)=>el.Product)
console.log("data",data)

  const fetchData=async ()=>{
       
    await axios.get("https://fakestoreapi.com/products")
             .then((res)=>{
                 setItem(res.data)
                 console.log("res",res.data)
             }).catch((err)=>{
              console.log(err)
             })
       
  }


  useEffect(() => {
    fetchData();
  }, []);
  
  useEffect(() => {
    dispatch(getProduct(item));
  }, [item, dispatch]);

  

  const handleAdd=(item)=>{

           dispatch(cartProduct(item))
  }

  return (
    <div>
        
       <h1>ProductDetails</h1> 

        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", marginBottom:"50px"}}>
       {

        data.map((el)=>{

              return(

                   <div key={el.id}>

                      <img width="100px"  src={el.image} alt={el.title} />

                      <h3>Price:{el.price}</h3>
                      
                      <button onClick={()=>handleAdd(el)} >Add Item</button>
                      
                      
                   </div>
              )
        })
       }
</div>

    </div>
  )
}

export default ProductDetails