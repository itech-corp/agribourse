import React,{Component} from 'react';
//import { makeStyles } from '@material-ui/core/styles';

import Product from '../../UI/Product/Product';
import data from '../../../dataSheet/product.json';
import ShopPageHeader from '../../UI/ShopPageHeader/ShopPageHeader';
import { Row, Col } from 'reactstrap';


class ShopPage extends Component  {
 
    state ={
        productList:data
    }

    componentDidMount(){
        
    }
    componentWillMount(){
       
    }
    FilterHandler=(type)=>{
        let FilteredList = data.filter(elmt=>{
            return (elmt.rating <=3)
        });
        console.log("ShopPage "+type);
        this.setState({productList:FilteredList});
    }

  render(){ 
      let product = this.state.productList.map(item=>{
    
      return (
      
               
                <Product 
                    productName={item.productName} 
                    photos={item.photos} 
                    price={item.price} 
                    description={item.description} 
                    rating ={(item.rating*20)+"%"} 
                    url={item.url} 
                    promo= {item.promo}
                    oldPrice = {item.oldPrice}
                    order =  {item.order}
                    review = {item.review}
                    />
            
          )
      
  });
        return (
        
                <section class="section-content bg padding-y-sm">
                    <div class="container">
                        <div className="">
                        <Row  container>
                              <Col xs={12} md={3}>
                                <ShopPageHeader filter={this.FilterHandler}/>
                              </Col>
                              <Col md={9}>
                                   <Row>
                                       {product}  
                                   </Row>
                              </Col>
                        </Row> 
                        </div>
                    </div>
                </section>
           
       );
}
    
  
}

export default ShopPage;