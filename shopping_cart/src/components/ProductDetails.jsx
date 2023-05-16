
import React,{useEffect, useState} from 'react'
import axios from "axios"
import {useDispatch,useSelector} from "react-redux"
import { getProduct } from '../redux/action'
import { Link } from 'react-router-dom'
import { Grid,Button,Box,Flex,Image,Text, Heading, VStack,Skeleton} from '@chakra-ui/react'

import "../style.css"

const ProductDetails = () => {

  const[item,setItem]=useState([])
  const[loading,setLoading]=useState(false)
 
  const dispatch=useDispatch()



const data=useSelector((el)=>el.Product)
console.log("data",data)


// ------------------------------ API Call Here---------------------------

  const fetchData=async ()=>{
        setLoading(true)
    await axios.get("https://fakestoreapi.com/products")
             .then((res)=>{
                
                 setItem(res.data)
                 setLoading(false)
                 console.log("res",res.data)
             }).catch((err)=>{
              console.log(err)
             })
       
  }

  // --------------------------- Get Data Use Here


  useEffect(() => {
    
    fetchData();
  }, []);
  
  useEffect(() => {
    dispatch(getProduct(item));
  }, [item, dispatch]);


  // ------------------------------- Loading Logic Here -----------------------------------
       const Loading=()=>{

            return(
              <>

              <Grid  templateColumns='repeat(4, 1fr)' gap={6}>
                 
                        <Skeleton height='300px' />
                        <Skeleton height='300px' />
                        <Skeleton height='300px' />
                        <Skeleton height='300px' />
                        <Skeleton height='300px' />
                        <Skeleton height='300px' />
                        <Skeleton height='300px' />
                        <Skeleton height='300px' />
                
                </Grid> 
              </>
            )
       }


  return (
    <div>
           
        
       <Heading mb={4} size="md">Product Details</Heading> 

          {

            loading && <Loading/>
          }

       <Grid templateColumns='repeat(4, 1fr)' gap={6}>

       {

        data.map((el)=>{

              return(

                
          <Flex alignItems="center" justifyContent="center" p={3} boxShadow="md">
                    
              <Box key={el.id}   >
                    
                       <VStack>
                          <Box>
                               <Image width="150px"  src={el.image} alt={el.title} />
                          </Box>

                         <Box>
                             <Text >Price:{el.price}</Text>
                         </Box>
                      
                        
                        <Box>

                           <Link to={`/singal/${el.id}`}>

                            <Button colorScheme='blue'  size='sm'>View Item</Button>
                           </Link>
                       </Box>
                    
                   </VStack>
                   
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