import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron} from 'reactstrap';
import Carousel from '../../../Components/UI/Caroussel/Caroussel';
import  './home.css';
import SideMenu from '../../../Components/UI/SideMenu/SideMenu';
import Promotional from '../../../Components/UI/Promotional/Promotional';
import TabsMenu from '../../../Components/UI/TabsMenu/TabsMenu';
import Footer from '../../../Components/Footer/Footer';
import Navigation from '../../../Components/Header/Navigation/Navigation';

class Home extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Container>
                
                    <Jumbotron className="bg-light" >
                        <Row className="display-flex" >
                            <Col className="home-children" xs={3}>
                              <SideMenu/>
                            </Col>
                            <Col xs={6} className="home-children">
                                <Carousel/>
                            </Col>
                            <Col xs={3} className="home-children">
                                <Promotional/>
                            </Col>
                    </Row>
                    </Jumbotron>
                    <Row>
                        <Col xs={12}> <img width="100%" height="auto" src="https://www.limarket.net/my-assets/image/add/7e577e0e94263f62ef9a252c690677c2.png" alt="img"/></Col>
                        <Col className="mt-2">
                            <TabsMenu/>
                        </Col>
                        <Col xs={12}> <img width="100%" height="auto" src="https://www.limarket.net/my-assets/image/add/7e577e0e94263f62ef9a252c690677c2.png" alt="img"/></Col>
                    </Row> 
                    <Footer/>
                </Container>
               
            </div>
        );
    }
}

export default Home;