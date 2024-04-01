const initialStateSearch = {
    searchValue: ''
  };
  
  export default function searchReducer(state = initialStateSearch, action) {
    switch (action.type) {
      case "search/searchValue":
        return {
          ...state,
          searchValue: action.payload
        };
      default:
        return state
  }
}

  export function getSearchValue(value) {
      return { type: "search/searchValue", payload: value };
    };
  
  