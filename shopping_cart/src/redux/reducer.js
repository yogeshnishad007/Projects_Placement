


//import { GET_PRODUCT,SINGAL_PRODUCT,REMOVE_PRODUCT } from "./actionType";


const initState={

         Product:[],
         Cart:[]
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
                                        Cart:[...state.Cart,payload]
                                    }
                                       
                                }


                                default:
                                     return state
                                
                            }

  }