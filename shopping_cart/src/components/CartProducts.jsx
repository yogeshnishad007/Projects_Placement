import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { removeProduct } from '../redux/action'


const CartProducts = () => {

  const dispatch=useDispatch()
  const CartData=useSelector((el)=>el.Cart)
   console.log("cart",CartData)

const TotalPrice=useSelector((el)=>el.total)
   console.log("t",TotalPrice)


const handleRemove=(id)=>{
         
  dispatch(removeProduct(id))
  alert(`${id} REMOVE` )

}

  return (
    <div>

      <div style={{display:"flex", justifyContent:"space-around"}}>

      <h3>Total Item:{CartData.length}</h3>

      <h3>Total Price:{Math.floor(TotalPrice)}</h3>
      </div>
      
        
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)"}}>

   
       
         {

          CartData.map((el)=>{

              return(

                <div key={el.id} style={{marginTop:"50px"}}>

                  <img width="100px" src={el.image} alt={el.title}/>
                     
                     <h3>{el.title}</h3>
                     <h3>Price:{el.price}</h3>

                     <button onClick={()=>handleRemove(el.id)} >REMOVE</button>
                     
                  </div>
              )
          })
         }

</div>

    </div>
  )
}

export default CartProducts