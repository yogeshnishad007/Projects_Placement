import React from 'react'
import { useSelector } from 'react-redux'
const CartProducts = () => {

  const CartData=useSelector((el)=>el.Cart)
console.log("cart",CartData)


  return (
    <div>
      <h1>CartProducts</h1>

      
         {

          CartData.map((el)=>{

              return(

                <div>
                          
                  </div>
              )
          })
         }

    </div>
  )
}

export default CartProducts