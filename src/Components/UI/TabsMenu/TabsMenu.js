import React from 'react';
import { Row, Col, Button, ButtonGroup, Jumbotron } from 'reactstrap';
import './TabsMenu.css';
import Products from '../Products/Products';

function TabsMenu(props) {
    return (
        <div className="tabs-menu">
            <Row className="m-0">
                <Col xs={3} className="p-0">
                    <Button block className="bg-success tabs-btn rounded-0">MEILLEURS VENTE</Button>
                </Col>
                <Col xs={3} className="p-0">
                    <Button block className="bg-success tabs-btn rounded-0">NOS PRODUITS POPULAIRE</Button>
                </Col>
                <Col xs={3} className="p-0">
                    <Button block className="bg-success tabs-btn rounded-0">MEILLEURS PRODUIT MARCHANDS</Button>
                </Col>
                <Col xs={3} className="p-0">
                    <Button block className="bg-success tabs-btn rounded-0">PRODUIT RENCENTS</Button>
                </Col>
            </Row>
            <Row>
               <Col md={12}>
                    <Jumbotron>
                        <Products/>
                    </Jumbotron>
               </Col>
            </Row>
        </div>
    );
}

export default TabsMenu;