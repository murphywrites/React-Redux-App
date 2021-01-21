import { FETCH_BREWERY_START, FETCH_BREWERY_SUCCESS, FETCH_BREWERY_FAIL } from "../actions"

const initialState = {
    search: {
        city:'chicago',
        state: ''
    },
    brewery:[],
    isFetching:false,
    error: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
    case(FETCH_BREWERY_START):
    return state
    case(FETCH_BREWERY_SUCCESS):
    return state
    case(FETCH_BREWERY_FAIL):
    return state    
    default: 
        return state
    }
}
export default reducer