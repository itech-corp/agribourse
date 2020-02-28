import React from 'react';
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, Row, Col, Form,  } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faPhoneSquare, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import './TopLine.css'
import fr from '../../../assets/images/fr.png';
import us from '../../../assets/images/us.png';

function TopLine(props) {
    return (
        <div className="TopLine  push-right">
            <Container>
                <Row>
                    <Col>
                        <p className="TopLineChild"><FontAwesomeIcon icon={ faPhoneSquare } /> Hotline: +237655859497/699934999</p>
                    </Col>
                    <Col>
                        <UncontrolledButtonDropdown className="TopLineChild  ">
                            <DropdownToggle className="TopDropDown" size='sm' caret><FontAwesomeIcon icon={faMoneyBill} /> XFA Central African</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>XFA Central African</DropdownItem>
                                <DropdownItem disabled>$ US Dollar</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                        <UncontrolledButtonDropdown className="TopLineChild  ">
                            <DropdownToggle className="TopDropDown" size='sm' caret>
                            <img className="lang-img" alt="fr" src={fr}/> French
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header><img className="lang-img" alt="fr" src={us}/> English</DropdownItem>
                                <DropdownItem disabled><img className="lang-img" alt="fr" src={fr}/> French</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TopLine;