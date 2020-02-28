import * as actionTypes from './actionTypes';
import firebase from 'firebase';

export const addToCart = () =>{

    console.log("add to cart");
    return {type:actionTypes.ADD_TO_CART};
}

export const removeFromCart = () => {
    console.log("removed");
    return {type:actionTypes.REMOVE_FROM_CART};
}