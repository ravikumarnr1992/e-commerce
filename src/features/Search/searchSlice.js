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
      },
      clearSearchValue: (state) => {
        state.searchValue = ""
      }
    }
  })

  export const { searchValue, clearSearchValue} = searchSlice.actions;

  export default searchSlice.reducer;
  
  
  