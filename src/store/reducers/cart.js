import * as actionTypes from '../action/actionTypes';
import { updateObject } from '../utility';
;


const initialState = {
   cart:0,
};

const addToCart = (state,action) =>{

    return updateObject(state,{cart:initialState.cart +1})
}

const removeFromCart = (state,action) =>{

    return updateObject(state,{cart:initialState.cart -1})
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
      
        case actionTypes.ADD_TO_CART: return addToCart(state,action);
        case actionTypes.REMOVE_FROM_CART: return removeFromCart(state,action);
        default:
            return state;
    }
};

export default reducer;