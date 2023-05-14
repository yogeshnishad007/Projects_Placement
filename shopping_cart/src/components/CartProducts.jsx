import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { removeProduct } from '../redux/action'
import { Button,Box,Image,Text,Grid, VStack,Flex} from '@chakra-ui/react'



const CartProducts = () => {

  const dispatch=useDispatch()
  const CartData=useSelector((el)=>el.Cart)
   console.log("cart",CartData)

const TotalPrice=useSelector((el)=>el.total)
   console.log("t",TotalPrice)


const handleRemove=(id)=>{
         
  dispatch(removeProduct(id))
  alert(`ID NUMBER ${id} REMOVED` )

}

  return (
    <div>

      <Flex  justifyContent="space-around">
              <Box>

                  <Text fontSize='2xl' as="b">Total Item : {CartData.length}</Text>
              </Box>
               
                <Box>
                      <Text fontSize='2xl' as="b">Total Price : {Math.floor(TotalPrice)}</Text>
                </Box>

           
      </Flex>
      
        
      <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={20}>

    
       
         {

          CartData.map((el)=>{

              return(
                // <Flex alignItems="center" justifyContent="center" p={3} boxShadow="md">
              
         <Box key={el.id}>
               <VStack>

                     <Box>
                        <Image width="100px" src={el.image} alt={el.title}/>
                     </Box>

                      <Box>
                         <Text size="lg" as="b">{el.title}</Text>
                      </Box>

                       <Box>
                            <Text size="lg" as="b"> Price : {el.price}</Text>
                                
                       </Box>
                     
                    
                  

                     <Box>
                         <Button colorScheme='red' onClick={()=>handleRemove(el.id)} >REMOVE</Button>

                     </Box>

                     
                     </VStack>
                 </Box>
              // </Flex>
              )
          })
         }
   
      </Grid>

    </div>
  )
}

export default CartProducts