
import React,{useEffect, useState} from 'react'
import axios from "axios"
import {useDispatch,useSelector} from "react-redux"
import { getProduct } from '../redux/action'
import { Link } from 'react-router-dom'
import { Grid,Button,Box,Flex,Image,Text, Heading} from '@chakra-ui/react'

import "../style.css"

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

  

  return (
    <div>
        
       <Heading mb={4} size="md">Product Details</Heading> 

       <Grid templateColumns='repeat(4, 1fr)' gap={6}>

       {

        data.map((el)=>{

              return(

                
                    <Flex alignItems="center" p={3} boxShadow="md">
                    
                   <Box key={el.id}   >
                    


                      <Image width="150px"  src={el.image} alt={el.title} />
                      
                      
                         <Text >Price:{el.price}</Text>
                 
                      
                   

                    
                      <Link to={`/singal/${el.id}`}>
                      <Button colorScheme='blue'  size='sm'>View Item</Button>
                     </Link>
                   
                  </Box>
                  </Flex>
                   
              )
        })
       }

    </Grid>
</div>

    // </div>
  )
}

export default ProductDetails