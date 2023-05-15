import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { cartProduct, singalProduct } from '../redux/action';
import { Button,Box,Image,Text, Heading, VStack,Flex} from '@chakra-ui/react'

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
           alert("Added In Cart")
  }

  useEffect(()=>{
          
    getData()
  },)


  useEffect(()=>{
          
    dispatch(singalProduct(item))
  },[dispatch,item])

  return (
    <div>
          
          <Box mt={20}>

              <Heading  size="md">Details Of Product</Heading> 
          </Box>
      
            
                
        <Box>

          <VStack mt={20} >
              <Box>
                 <Image width="100px" src={image} alt={title}/>  
              </Box>
             
               <Box>
                  <Heading size="md">{title}</Heading> 
              </Box>
          
                 <Flex justifyContent="center" alignItems="center" height="20vh" >
                  <Box ml="400px">
                      <Text fontSize='lg' width="70%" textAlign="center" >{description}</Text>
                   </Box>
                </Flex> 
             
               <Box>
                   <Text fontSize='md' as="b">Price : {price}</Text>
              </Box>

               <Box>
                   <Button colorScheme='teal' onClick={()=>handleAdd(singelData)} >Add Item</Button> 
               </Box>

              </VStack> 
            
               
       </Box>

    </div>





  )
}

export default SingelProduct