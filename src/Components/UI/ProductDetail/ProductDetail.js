import React, { Component } from 'react';
import productData from '../../../dataSheet/product.json';
import Navigation from '../../../Components/Header/Navigation/Navigation';

import { Row,Col, Card, CardBody, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import {  } from '@fortawesome/free-solid-svg-icons';
import './ProductDetail.css';

class ProductDetail extends Component {

    state={
        data:'none',
        count:1
    }
    componentWillMount(){
        let oneProduct= productData.filter(elmt=>{
            return elmt.productName == this.props.match.params.productName;
        });
        this.setState({data:oneProduct[0]});
        console.log(oneProduct[0])
        
    }
     minus = ()=>{
        let count= this.state.count - 1;
        this.setState({...this,count});
    }

    plus = ()=>{
        let count= this.state.count + 1;
        this.setState({...this,count});
    }
   
    render() {

        return (
            <div>
                <Navigation/>
                <div className="container">
                <Row>
                    <Col className="mb-4 text-start" xs={10}>
                        <Row>
                            <Col xs={3}>
                               <h2 className=" text-left text-uppercase">{this.state.data.productName}</h2>
                            </Col>
                            <Col  xs={8}>
                                <p className="text-right">
                                    <FontAwesomeIcon color="blue" size="2x" icon={faFacebookSquare} /> <FontAwesomeIcon color="darkturquoise" size="2x" icon={faTwitterSquare} /> <FontAwesomeIcon color="green" size="2x" icon={faWhatsappSquare} /> </p>
                            </Col>
                            <Col xs={9}>
                                <p className="text-left">Stock restant: 20 Tonnes</p>
                            </Col>
                            <Col xs={12}>
                                <hr/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={10}>
                        <Row>
                            <Col className="img-preview" xs={6}>
                                <Row>
                                    <Col  xs={3}>
                                        <a href="#"><img className=" img-thumbnail" src={this.state.data.photos[0]} /></a>
                                    </Col>
                                    <Col xs={8}>
                                        <Card>
                                            <CardBody>
                                            <img className="img-fluid" src={this.state.data.photos[0]}/>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="product-description" xs={6}>
                                <Row>
                                    <Col xs={12}>
                                       <h2 className="text-left"> {this.state.data.price} XFA</h2>
                                       <p className="text-left"><strong>Vendeur: </strong> <a href="#">AGRI</a></p>
                                    </Col>
                                    <Col className="button-group" xs={12}>
                                        <Row>
                                            <Col xs={3} className="pr-0">
                                                <div className="number">
                                                    <span onClick={this.minus} className="minus">-</span>
                                                    <input id="count" type="text" value={this.state.count}/>
                                                    <span onClick={this.plus} className="plus">+</span>
                                                </div>
                                            </Col>
                                            <Col className="pl-0" xs={2} ><Button block color="success">Acheter</Button></Col>
                                            <Col xs={2} className="pl-0" ><Button block>Ajouter</Button></Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12}>
                                        <p className="text-left">
                                        {this.state.data.description}
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </div>
            </div>
        );
    }
}

export default ProductDetail;