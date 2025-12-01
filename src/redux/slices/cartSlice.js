import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        // add to cart action.payload to be added in cart
       addToCart:(state,action)=>{
        const exisitingProduct = state.find(item=>item.id==action.payload.id)
        if(exisitingProduct){
            exisitingProduct.quantity++
            exisitingProduct.totalPrice = exisitingProduct.quantity * exisitingProduct.price
            const remainingProducts = state.filter(item=>item.id!=action.payload.id)
            state = [...remainingProducts,exisitingProduct]

        }else{
            state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
        }
       } ,
      //remove cart item
      removeCartItem:(state,action)=>{
       return state.filter(item=>item.id!=action.payload)
      },
     //increment quantity
     incrementCartItem:(state,action)=>{
        const exisitingProduct = state.find(item=>item.id==action.payload.id)
        exisitingProduct.quantity++
        exisitingProduct.totalPrice = exisitingProduct.quantity * exisitingProduct.price
        const remainingProducts = state.filter(item=>item.id!=exisitingProduct)
        state = [...remainingProducts,exisitingProduct]
     },   
      //decrement quantity
     decrementCartItem:(state,action)=>{
        const exisitingProduct = state.find(item=>item.id==action.payload.id)
        exisitingProduct.quantity--
        exisitingProduct.totalPrice = exisitingProduct.quantity * exisitingProduct.price
        const remainingProducts = state.filter(item=>item.id!=exisitingProduct)
        state = [...remainingProducts,exisitingProduct]
     },
     emptyCart:(state)=>{
        return []
     }   
    }

})
export const {addToCart,removeCartItem,incrementCartItem,decrementCartItem,emptyCart} = cartSlice.actions
export default cartSlice.reducer