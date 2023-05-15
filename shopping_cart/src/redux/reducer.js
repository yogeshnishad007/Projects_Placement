


//import { GET_PRODUCT,SINGAL_PRODUCT,REMOVE_PRODUCT } from "./actionType";


const initState={

         Product:[],
         Cart:[],
         Singel:{},
         total:0,
}



  export const productReducer=(state=initState,{type,payload})=>{

                            switch(type){


                              case "SINGAL_PRODUCT":{
                                          
                                return{
                                    ...state,
                                    Singel:{...payload}
                                }
                                   
                            }

                                case "GET_PRODUCT":{
                                          
                                    return{
                                        ...state,
                                        Product:payload
                                    }
                                       
                                }


                                case "CART_PRODUCT":{

                                    const checkItem = state.Cart.find(item => item.id === payload.id);
  
                                    if (checkItem) {
                                        alert("Item already added to cart.");
                                      return state;
                                    } else {
                                    
                                      return {
                                        ...state,
                                        Cart: [...state.Cart, payload],
                                        total: state.total + payload.price
                                      };
                                    }
                                          
                                   
                                }

                                case "REMOVE_PRODUCT":{
                                          
                                  const removedItem = state.Cart.find((item) => item.id === payload);
                                  if (removedItem) {
                                    const newTotal = state.total - removedItem.price;
                                    
                                    return {
                                      ...state,
                                      Cart: state.Cart.filter((el) => el.id !== payload),
                                      total: newTotal,
                                    };
                                  }
                                  return state;
                                       
                                }


                                default:
                                     return state
                                
                            }

  }