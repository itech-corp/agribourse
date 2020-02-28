import React from 'react';
import ProductCard from '../../../Components/UI/Products/Products';
import Navigation from '../../../Components/Header/Navigation/Navigation';

function ShopPage(props) {
    return (
        <div>
            <Navigation/>
            <ProductCard/>
        </div>
    );
}

export default ShopPage;