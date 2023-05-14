
//import { GET_PRODUCT, SINGAL_PRODUCT,REMOVE_PRODUCT} from "./actionType"

export const getProduct=(data)=>{

          return{
              type:"GET_PRODUCT",
              payload:data
          }
}


export const cartProduct=(cart)=>{

    return{
        type:"CART_PRODUCT",
        payload:cart
    }
}

export const removeProduct=(id)=>{

    return{
        type:"REMOVE_PRODUCT",
        payload:id
    }
}


export const singalProduct=(data)=>{

    return{
        type:"SINGAL_PRODUCT",
        payload:data
    }
}