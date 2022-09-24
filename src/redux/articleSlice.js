import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const BASEURL = "https://blogahmet.herokuapp.com";

export const getArticleAsync = createAsyncThunk("article/getArticleAsync",async()=>{
    const res = await axios(`${BASEURL}/get`);
    return res.data;
})

export const postArticleAsync = createAsyncThunk("article/postArticleAsync",async(data)=>{
        const res= await axios.post(`${BASEURL}/posts`,data);
        return res.data;

})

export const getDetailArticeAsync = createAsyncThunk("article/getDetailArticeAsync",async(slug)=>{
        const res =await axios.get(`${BASEURL}/${slug}`)
        return  res.data;
})


export const deleteArticleAsync = createAsyncThunk("article/deleteArticleAsync",async(id)=>{
    const res = await axios.delete(`${BASEURL}/delete/${id}`)
    return res.data;
})

export const uptadeArticleAsync = createAsyncThunk("article/uptadeArticleAsync", async({id,data})=>{
    const res =await axios.patch(`${BASEURL}/article/${id}`,data)
    return res.data;
})


export const articleSlice = createSlice({
    name : 'article',
    initialState:{
    items: [],  
    filteredItems : [],
    errorMessage:""
    },
    reducers : {

    },
    extraReducers:{
        [getArticleAsync.fulfilled] : (state,action) =>{
            state.items= action.payload.article;
            
        },
        [postArticleAsync.fulfilled]: (state,action) =>{
            if(action.payload.message){
                return ;
            }

            state.items.push(action.payload) 
            
        },
        [getDetailArticeAsync.fulfilled] :  (state,action) =>{
            const {slug} = action.payload;
            const index  =  state.items.find((item)=>item.slug ===slug);  
            state.filteredItems = index;
         },
         [uptadeArticleAsync.fulfilled] : (state,action) =>{
            if(action.payload.message){
                state.errorMessage =action.payload.message;
                return state.errorMessage ;
            }
         }
       

    }
})

export default articleSlice.reducer;