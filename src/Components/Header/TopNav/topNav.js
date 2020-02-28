import React from 'react';
import './TopNav.css';
import agriLogo from '../../../assets/images/Agribourse2.png';
import {faShoppingBag, faLock, faPen, faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as actions from '../../../store/action/index';
import {
  Navbar,
  NavbarBrand,
  Nav,
  InputGroupAddon,
  Button,
  Input,
  NavbarText,
  InputGroup,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  Container
  
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const TopNav = (props) => {
  
  let loginBtn = <NavbarText ><Link to="/login"><Button outline color="dark">   <FontAwesomeIcon icon={faLock} /> Connexion</Button></Link> <Link to="/signup"><Button outline color="danger">    <FontAwesomeIcon icon={faPen} /> Inscription</Button></Link></NavbarText>;
    if(props.userData !==null){
        loginBtn= <Button color="success" onClick={props.logOut}>Logout</Button>
    }
    console.log(props.isAuthenticated)
  return (
      
    <div  className="TopNav ">
        <Container>
           <Row>
                <Navbar light expand="md">
                   <Col> <NavbarBrand href="/"><img className="agri-logo" alt="Agri-Logo" src={agriLogo} />THE FUTURE</NavbarBrand></Col>
                   <Col>
                        <Nav className="mr-auto" navbar>
                            <InputGroup className="search-bar">
                                <Input />
                                <InputGroupAddon  addonType="append">
                                    <Button  color="dark">   <FontAwesomeIcon icon={faSearch} /> Rechercher</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Nav>
                   </Col>
                   <Col xs={4}>  
                        {loginBtn} 
                    </Col>
                    <Col>
                        <UncontrolledButtonDropdown outline className="shop-bag ">
                                <DropdownToggle  className="TopDropDown" size='sm' caret>
                                    <FontAwesomeIcon icon={faShoppingBag} />  Panier {props.cart}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>XFA Central African</DropdownItem>
                                    <DropdownItem disabled>$ US Dollar</DropdownItem>
                                </DropdownMenu>
                        </UncontrolledButtonDropdown>
                    </Col>
                </Navbar>
           </Row>
        </Container>
    </div>
  );
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        userData: state.auth.user,
        cart:state.cart.cart,
        isAuthenticated: state.auth.user !== null,
        authRedirectPath: state.auth.authRedirectPath
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( authData, isSignup ) => dispatch( actions.auth( authData, isSignup ) ),
        logOut: () =>dispatch(actions.logOut()),
        checkAuth: () =>dispatch(actions.authCheckState()),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
  };

export default connect( mapStateToProps, mapDispatchToProps)(TopNav);
