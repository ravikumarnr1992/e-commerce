import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchValue: ""
  };


  const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
      searchValue: (state, action) => {
       state.searchValue = action.payload
      }
    }
  })

  export const { searchValue} = searchSlice.actions;

  export default searchSlice.reducer;
  
  
  