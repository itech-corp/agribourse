import React, {Component} from "react";
import { connect } from 'react-redux';
import * as actions from '../../../store/action/index';
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
import "./SignupPage.css";
import agriLogo from "../../../assets/images/Agribourse2.png";

class signUp extends Component {

  state = {
    fields:{
      firstName:'',
      lastName:'',
      phone:'',
      email:'',
      password:'',
    },
    isSignUp:true
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
    this.props.onAuth( {firstName:this.state.fields.firstName.value, lastName:this.state.fields.lastName.value, phone:this.state.fields.phone.value, email:this.state.fields.email.value,password:this.state.fields.password.value},this.state.isSignUp );
    

  }

  render(){
    return (
      <>
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
                    <h3>Inscription</h3>
                    <p>Inscrivez-vous en utilisant votre address email</p>
                    
                    <Col md={12}>
                      <FormGroup>
                        <Label for="lastname" hidden>
                          Nom
                        </Label>
                        <Input
                          onChange={(event)=>this.inputChangedHandler(event,"lastName")}
                          type="text"
                          name="LastName"
                          id="lastname"
                          placeholder="Nom"
                        />
                      </FormGroup>{" "}
                    </Col>
                    <Col md={12}>
                      <FormGroup>
                        <Label for="exampleEmail" hidden>
                          Prenom
                        </Label>
                        <Input
                          onChange={(event)=>this.inputChangedHandler(event,"firstName")}
                          type="text"
                          name="firstName"
                          id="firstname"
                          placeholder="Prenom"
                        />
                      </FormGroup>{" "}
                    </Col>
                    <Col md={12}>
                      <FormGroup>
                        <Label for="phone" hidden>
                          Telephone
                        </Label>
                        <Input
                          onChange={(event)=>this.inputChangedHandler(event,"phone")}
                          type="tel"
                          name="phone"
                          id="phone"
                          placeholder="Telephone"
                        />
                      </FormGroup>{" "}
                    </Col>
                    <Col md={12}>
                      <FormGroup>
                        <Label for="email" hidden>
                          Email
                        </Label>
                        <Input
                          onChange={(event)=>this.inputChangedHandler(event,"email")}
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
                          onChange={(event)=>this.inputChangedHandler(event,"password")}
                          type="password"
                          name="password"
                          id="examplePassword"
                          placeholder="Password"
                        />
                      </FormGroup>{" "}
                    </Col>
                    <Col md={12}>
                      <Button color="success" block>
                        Inscription
                      </Button>
                    </Col>
                    <Col md={12}>
                        <br/>
                      <p>Deja inscrit ? <a href="/login">Connecter-vous</a></p>
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


export default connect(mapStateToProps,mapDispatchToProps)(signUp);
