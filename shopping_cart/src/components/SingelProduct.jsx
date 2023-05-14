import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { cartProduct, singalProduct } from '../redux/action';

const SingelProduct = () => {

  const dispatch=useDispatch();
  const singelData=useSelector(el=>el.Singel)
  const {price,image,title,description}=singelData


  // console.log("s",singelData)

  const {id}=useParams()


  const [item,setItem] = useState({})
  const getData= async()=>{

           await axios.get(`https://fakestoreapi.com/products/${id}`)
           .then((res)=>{
                
            setItem(res.data)
            console.log("singel",res.data)
           }) 
           .catch((err)=>{
              console.log(err)
           })
  }


   const handleAdd=(item)=>{

           dispatch(cartProduct(item))
  }

  useEffect(()=>{
          
    getData()
  },[])


  useEffect(()=>{
          
    dispatch(singalProduct(item))
  },[item])

  return (
    <div>
      
             <h1>Details Of Product</h1> 
              <img width="100px" src={image} alt={title}/>   
              <h2>{title}</h2> 
              <h4>{description}</h4>
              <h4>Price{price}</h4>
               <button onClick={()=>handleAdd(singelData)} >Add Item</button> 

    </div>


  )
}

export default SingelProduct