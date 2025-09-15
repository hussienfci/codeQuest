
import { createSlice } from "@reduxjs/toolkit";

export const tableDataSlice = createSlice({
    name:"TableData" , 
    initialState:{
        rows:[
            { make: "Tesla", model: "Model Y", price: 64950},
            { make: "Ford", model: "F-Series", price: 33850},
            { make: "Toyota", model: "Corolla", price: 29600},
            { make: "Mercedes", model: "EQA", price: 48890},
            { make: "Fiat", model: "500", price: 15774},
            { make: "Nissan", model: "Juke", price: 20675},
        
        ], 
        cols:[ 
            { field: "make" },
            { field: "model" },
            { field: "price" },
      ] , 
      isloading: false 
    },
    reducers:{
        setRows(state, action){
            state.rows = []
            state.rows.push( action.payload ); 
        } , 
        setCols(state , action ) {
            state.cols= [ ]  ;
            state.cols.push(action.payload) ;
        } 
    }
}) ; 

export const {setRows , setCols} = tableDataSlice.actions
