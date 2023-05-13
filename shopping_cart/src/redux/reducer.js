


//import { GET_PRODUCT,SINGAL_PRODUCT,REMOVE_PRODUCT } from "./actionType";


const initState={

         Product:[],
         Cart:[],
         total:0,
}



  export const productReducer=(state=initState,{type,payload})=>{

                            switch(type){

                                case "GET_PRODUCT":{
                                          
                                    return{
                                        ...state,
                                        Product:payload
                                    }
                                       
                                }


                                case "CART_PRODUCT":{
                                          
                                    return{
                                        ...state,
                                        Cart:[...state.Cart,payload],
                                        total:state.total + payload.price
                                    }
                                       
                                }


                                default:
                                     return state
                                
                            }

  }