import React from 'react';
import './App.css';
import Firebase from 'firebase';
import { connect } from 'react-redux';
import * as actions from './store/action/index';

import Layout from './Container/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

var firebaseConfig = {
  apiKey: "AIzaSyB2FvLwRB8BR55nRB8Cxq0KM0k4ECjwnlI",
  authDomain: "agribourse-449e3.firebaseapp.com",
  databaseURL: "https://agribourse-449e3.firebaseio.com",
  projectId: "agribourse-449e3",
  storageBucket: "agribourse-449e3.appspot.com",
  messagingSenderId: "1080948094181",
  appId: "1:1080948094181:web:7cdb4e10c54d2d976c900c"
};


Firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Layout/>
     </BrowserRouter>
     
    </div>
  );
}

const mapStateToProps = state =>{
  return {
   isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState())
  };
}; 
export default connect(mapStateToProps,mapDispatchToProps)(App);
