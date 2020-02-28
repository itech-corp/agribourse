import React,{Component} from "react";
import { connect } from 'react-redux';
import * as actions from '../../../store/action/index';
import { Redirect } from 'react-router-dom';

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Container,
  Jumbotron
} from "reactstrap";
import "./Login.css";
import agriLogo from "../../../assets/images/Agribourse2.png";



class Login extends Component  {

  state ={
    fields:{
      email:'',
      password:'',
    },
    isSignUp:false
    
  }

  inputChangedHandler = (event,fieldName) => {
    const updatedField = {
      ...this.state.fields,
      [fieldName]: {
        ...this.state.fields[fieldName],
        value: event.target.value
      }
    };
    this.setState({fields:updatedField});
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth( {email:this.state.fields.email.value,password:this.state.fields.password.value},this.state.isSignUp );
    

  }

  render(){

    let authRedirect = null;
    if (this.props.isAuthenticated) {
        authRedirect = <Redirect to={this.props.authRedirectPath}/>
    }
    return (
      <>
          {authRedirect}
          <div className="bg-image"></div>
          <div className="login-page">
          <Container>
            <Form onSubmit={this.submitHandler} Container>
              <Row form>
                <Col Container md={{ size: 4, offset: 4 }}>
                  <Jumbotron className="login-jumbotron  rounded-1 p-4 mt-5">
                    <a href="/">
                      <img
                        src={agriLogo}
                        className="img-fluid rounded-cercle agri-logo"
                      />
                    </a>
                    <h3>Connexion</h3>
                    <p>Connecter vous en utilisant votre address email </p>
                   
                    <Col md={12}>
                      <FormGroup>
                        <Label for="email" hidden>
                          Email
                        </Label>
                        <Input
                          onChange={(event)=>this.inputChangedHandler(event,'email')}
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                      </FormGroup>{" "}
                    </Col>
                    <Col md={12}>
                      <FormGroup>
                        <Label for="examplePassword" hidden>
                          Password
                        </Label>
                        <Input
                          onChange={(event)=>this.inputChangedHandler(event,'password')}
                          type="password"
                          name="password"
                          id="examplePassword"
                          placeholder="Password"
                        />
                      </FormGroup>{" "}
                    </Col>
                    <Col md={12}>
                      <Button color="success" block>
                        Connexion
                      </Button>
                    </Col>
                    <Col md={12}>
                      <br/>
                      <p>>Vous etes nouveau ? <a href="signup" >Inscrivez-vous</a></p>
                      <br/>
                    </Col>
                  </Jumbotron>
                </Col>
              </Row>
            </Form>
          </Container>
        </div>
      </>
    );
  }
  
}

const mapStateToProps = state => {
  return {
      loading: state.auth.loading,
      error: state.auth.error,
      isAuthenticated: state.auth.user !== null,
      authRedirectPath: state.auth.authRedirectPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onAuth: ( email, password, isSignup ) => dispatch( actions.auth( email, password, isSignup ) ),
      onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);
