import React from 'react';
import { Nav } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain, faShoppingCart, faList } from '@fortawesome/free-solid-svg-icons';
import './SideMenu.css';
function SideMenu(props) {
    return (
        <div className="h-100 w-100">
             <Nav vertical className="">
                
                    <h5 className="categorie-text text-monospace border rounded-pill" ><FontAwesomeIcon icon={faList} /> CATEGORIE</h5>
                   
                <ul className="list-unstyled text-left text-decoration-none mt-2 border">
                    <li>  <FontAwesomeIcon icon={faShoppingCart} /> <a className="text-decoration-none text-reset" href="#"  >Bles de Tunis<span class="float-right badge badge-light round">></span> </a></li>
                    <li>  <FontAwesomeIcon icon={faShoppingCart} /> <a className="text-decoration-none text-reset" href="#" >Riz casser  <span class="float-right badge badge-light round">></span>  </a></li>
                    <li>  <FontAwesomeIcon icon={faShoppingCart} /> <a className="text-decoration-none text-reset" href="#" >Cereale entier<span class="float-right badge badge-light round">></span>  </a></li>
                    <li>  <FontAwesomeIcon icon={faShoppingCart} /> <a className="text-decoration-none text-reset" href="#" >Engrais et materiaux <span class="float-right badge badge-light round">></span></a></li>
                    <li>  <FontAwesomeIcon icon={faShoppingCart} /> <a className="text-decoration-none text-reset" href="#"  >Bles<span class="float-right badge badge-light round">></span> </a></li>
                    <li>  <FontAwesomeIcon icon={faShoppingCart} /> <a className="text-decoration-none text-reset" href="#" >Riz  <span class="float-right badge badge-light round">></span>  </a></li>
                    <li>  <FontAwesomeIcon icon={faShoppingCart} /> <a className="text-decoration-none text-reset" href="#" >Cereale<span class="float-right badge badge-light round">></span>  </a></li>
                    <li>  <FontAwesomeIcon icon={faShoppingCart} /> <a className="text-decoration-none text-reset" href="#" >Riz casser  <span class="float-right badge badge-light round">></span>  </a></li>
                    <li>  <FontAwesomeIcon icon={faShoppingCart} /> <a className="text-decoration-none text-reset" href="#" >Cereale entier<span class="float-right badge badge-light round">></span>  </a></li>
                    <li>  <FontAwesomeIcon icon={faShoppingCart} /> <a className="text-decoration-none text-reset" href="#" >Engrais et materiaux <span class="float-right badge badge-light round">></span></a></li>
                    <li>  <FontAwesomeIcon icon={faShoppingCart} /> <a className="text-decoration-none text-reset" href="#"  >Bles<span class="float-right badge badge-light round">></span> </a></li>
                    <li>  <FontAwesomeIcon icon={faShoppingCart} /> <a className="text-decoration-none text-reset" href="#" >Riz  <span class="float-right badge badge-light round">></span>  </a></li>
                </ul>
                                </Nav> 
        </div>
    );
}

export default SideMenu;