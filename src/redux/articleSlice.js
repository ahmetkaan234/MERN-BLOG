import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const getArticleAsync = createAsyncThunk("article/getArticleAsync",async()=>{
    const res = await axios(`http://localhost:5000/get`);
    return res.data;
})

export const postArticleAsync = createAsyncThunk("article/postArticleAsync",async(data)=>{
        const res= await axios.post("http://localhost:5000/posts",data);
        return res.data;

})

export const getDetailArticeAsync = createAsyncThunk("article/getDetailArticeAsync",async(slug)=>{
        const res =await axios.get(`http://localhost:5000/${slug}`)
        return  res.data;
})


export const deleteArticleAsync = createAsyncThunk("article/deleteArticleAsync",async(id)=>{
    const res = await axios.delete(`http://localhost:5000/delete/${id}`)
    return res.data;
})

export const uptadeArticleAsync = createAsyncThunk("article/uptadeArticleAsync", async({id,data})=>{
    const res =await axios.patch(`http://localhost:5000/article/${id}`,data)
    return res.data;
})


export const articleSlice = createSlice({
    name : 'article',
    initialState:{
    items: [],  
    filteredItems : [],
    },
    reducers : {

    },
    extraReducers:{
        [getArticleAsync.fulfilled] : (state,action) =>{
            state.items= action.payload.article;
            
        },
        [postArticleAsync.fulfilled]: (state,action) =>{
            state.items.push(action.payload) 
        },
        [getDetailArticeAsync.fulfilled] :  (state,action) =>{
            const {slug} = action.payload;
            const index  =  state.items.find((item)=>item.slug ===slug);  
            state.filteredItems = index;
         },
       

    }
})

export default articleSlice.reducer;