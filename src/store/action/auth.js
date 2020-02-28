import * as actionTypes from './actionTypes';
import firebase from 'firebase';


export const authStart = () => {
    console.log("[authStart]");
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (userData,userID,isSignup) => {
    console.log("[authSuccess]");
    if(isSignup){
        firebase.database()
    .ref("/Users")
    .child(userID).set({email:userData.email,password:userData.password,fullName:userData.firstName+" "+userData.lastName,phone:userData.phone,status:'pending'});
    console.log("DATA SAVED");
    }
    return {
        type: actionTypes.AUTH_SUCCESS,
        user:userData,
        userID: userID
       

      
    };
};


export const authFail = (error) => {
    console.log("[authFail]"+ error);
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logOut = () => {

    firebase.auth().signOut().then(function() {
        console.log("Signed Out")
      }).catch(function(error) {
        // An error happened.
      });
      
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
           // dispatch(logOut());
        }, expirationTime * 1000);
    };
};

export const auth = (authData, isSignup) => {
    
    return dispatch => {
        dispatch(authStart());
       
        
        if (!isSignup) {
            console.log("Login")
            firebase.auth().signInWithEmailAndPassword(authData.email,authData.password).then(response=>{
               return firebase.auth().currentUser;
               
               
            }).then(user=>{
                dispatch(authSuccess(user,user.uid,isSignup));
            }).catch(function(error) {
                // Handle Errors here.
                dispatch(authFail(error));
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
              });
        }
        else if(isSignup){
            console.log("SignUp");
            console.log(authData.email)
            firebase.auth().createUserWithEmailAndPassword(authData.email, authData.password).then(response=>{
               
               
                 //
                console.log("promise 2" );
                dispatch(authSuccess(authData,firebase.auth().currentUser.uid,isSignup));
            }).catch(function(error) {
                // Handle Errors here.
                console.log("here is the error "+ error.message)
                dispatch(authFail(error));
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
              });
        }
       
           
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    return dispatch => {

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                dispatch(authSuccess(user, user.uid));
                const expirationDate = new Date(localStorage.getItem('expirationDate'));
            } else {
                console.log("User LoggedOut ")
               
            }
          });
          
       console.log("check USER ")
           
      
        
    };
};