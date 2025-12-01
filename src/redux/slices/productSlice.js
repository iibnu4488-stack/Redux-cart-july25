import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// action with asynchronous function call
export const getAllproducts = createAsyncThunk('products/getAllproducts',async()=>{
 const result   =await axios.get('https://dummyjson.com/products')
//  console.log(result.data.products);
 sessionStorage.setItem("products",JSON.stringify(result.data.products))
 return result.data.products
 
})

const productSlice = createSlice({
    name:"products",
    initialState:{
        allProducts:[],
        dummyAllProducts:[],
        loading:true,
        error:""
        

    },
    reducers:{
        // action are synchronous
        searchProduct:(state,action)=>{
            state.allProducts = state.dummyAllProducts.filter(item=>item.title.toLowerCase().includes(action.payload.toLowerCase()))
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllproducts.fulfilled,(state,action)=>{
            state.allProducts = action.payload
            state.dummyAllProducts = action.payload
            state.loading = false
            state.error = ""
        })
         builder.addCase(getAllproducts.pending,(state,action)=>{
            state.allProducts = []
            state.dummyAllProducts = []
            state.loading = true
            state.error = ""
        })
         builder.addCase(getAllproducts.rejected,(state,action)=>{
            state.allProducts = []
            state.dummyAllProducts = []
            state.loading = false
            state.error = "Something went wrong!!! API Call Failed..."
        })
    }

})
export const {searchProduct} = productSlice.actions
export default productSlice.reducer