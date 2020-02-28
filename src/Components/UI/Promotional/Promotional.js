import React from 'react';
import { Card, Button, Row, Col } from 'reactstrap';
import './Promotional.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

function Promotional(props) {
    return (
        <div>
            <h5 className="categorie-text text-monospace border rounded-pill" ><FontAwesomeIcon icon={faList} /> Promotions</h5>
            <Card style={{maxHeight:'150px',marginTop:"10px"}}>
                <Row>
                    <Col xs={5}>
                    <img style={{width:'100%'}} className="float-left " top  src="https://ifpnews.com/wp-content/uploads/2016/06/Agriculture-products.jpg" alt="Card image cap" />
                    </Col>
                    <Col xs={7}>
                       <Row className="m-0">
                           <Col xs={11} className="p-0">
                            <p className="text-center">Du sorgho en promo</p>
                           </Col>
                           <Col xs={10} className="p-0">
                               <Button  size="sm"  className="price-btn text-monospace rounded-0 float-right m-1">
                                1000F
                                </Button>
                           </Col>
                       </Row>
                    </Col>
                </Row>
            </Card>
            <Card style={{maxHeight:'150px',marginTop:"10px"}}>
                <Row>
                    <Col xs={5}>
                    <img style={{width:'100%'}} className="float-left " top  src="https://sc01.alicdn.com/kf/HTB12oVEvpmWBuNjSspdq6zugXXal/Chinese-agriculture-products-Red-Vigna-bean-red.jpg" alt="Card image cap" />
                    </Col>
                    <Col xs={7}>
                       <Row>
                           <Col xs={12}>
                           <p className="text-center">Les meilleurs haricots</p>
                           </Col>
                           <Col xs={10}>
                               <Button  size="sm"  className="price-btn text-monospace rounded-0 float-right m-1">
                            1000F
                        </Button>
                           </Col>
                       </Row>
                    </Col>
                </Row>
            </Card>
            <Card style={{maxHeight:'150px',marginTop:"10px"}}>
                <Row>
                    <Col xs={5}>
                    <img style={{width:'100%'}} className="float-left " top  src="https://previews.123rf.com/images/raymond83/raymond831606/raymond83160600086/59982883-el-frijol-es-una-variedad-del-frijol-com%C3%BAn-se-llama-as%C3%AD-por-su-parecido-visual-en-forma-y-color-a-un-ri%C3%B1%C3%B3n-.jpg" alt="Card image cap" />
                    </Col>
                    <Col xs={7}>
                       <Row>
                           <Col xs={12}>
                           <p className="text-center">Du sorgho en promo</p>
                           </Col>
                           <Col xs={10}>
                               <Button  size="sm"  className="price-btn text-monospace rounded-0 float-right m-1">
                            1000F
                        </Button>
                           </Col>
                       </Row>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}


export default Promotional;
