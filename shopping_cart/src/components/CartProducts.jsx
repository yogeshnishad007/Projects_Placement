import React from 'react'
import { useSelector } from 'react-redux'
const CartProducts = () => {

  const CartData=useSelector((el)=>el.Cart)
console.log("cart",CartData)

const TotalPrice=useSelector((el)=>el.total)
console.log("t",TotalPrice)

  return (
    <div>

      <div style={{display:"flex", justifyContent:"space-around"}}>

      <h3>Total Item:{CartData.length}</h3>

      <h3>Total Price:{TotalPrice}</h3>
      </div>
      
        
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)"}}>

   
       
         {

          CartData.map((el)=>{

              return(

                <div key={el.id} style={{marginTop:"50px"}}>

                  <img width="100px" src={el.image} alt={el.title}/>
                     
                     <h3>{el.title}</h3>
                     <h3>Price:{el.price}</h3>

                     <button >REMOVE</button>
                     
                  </div>
              )
          })
         }

</div>

    </div>
  )
}

export default CartProducts