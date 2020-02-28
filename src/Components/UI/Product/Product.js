import React from 'react';
import './Product.css';
import * as actions from '../../../store/action/index';
import {connect } from 'react-redux';
 function ProductCard(props) {
	let productLink= "shop/"+props.productName;
	let price='null';
	if(props.promo){
		 price = <span class="price-new">{props.price}Fcfa</span>;
	}
	else {
		 price=<><span class="price-new">{props.price}Fcfa </span> <del class="price-old">{props.oldPrice}Fcfa</del></>;}

	
    return(
        

<div class="col-md-4">
	<figure class="card card-product">
		<div class="img-wrap"><a href={productLink}><img alt="img" src={props.photos[0]} /></a></div>
		<figcaption class="info-wrap">
				<h4 class="title">{props.productName}</h4>
				<p class="desc">{props.description}</p>
				<div class="rating-wrap">
					<ul class="rating-stars">
						<li style={{width:props.rating}} class="stars-active"> 
							<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
						</li>
						<li>
							<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> 
						</li>
					</ul>
					<div class="label-rating"> {props.review} reviews</div>
					<div class="label-rating"> {props.order} orders </div>
				</div> 
		</figcaption>
		<div class="bottom-wrap">
			<a onClick={props.addTocart} class="btn btn-sm btn-primary float-right">Ajouter au panier</a>	
			<div class="price-wrap h5">
				{price}
			</div>
		</div>
	</figure>
</div> 
 

    )
}


const mapStateToProps = state => {
    return {
       
		cart:state.cart.cart,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        
		onCartAdd: () => dispatch(actions.addToCart()),
		onCartRemove: () => dispatch(actions.removeFromCart()),
    };
  };

  export default connect(mapStateToProps,mapDispatchToProps)(ProductCard);