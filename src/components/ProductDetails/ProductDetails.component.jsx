import './ProductDetails.style.css';
import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {onAddCart} from '../../actions';
import {withRouter} from 'react-router-dom';


const ProductDetails = ({match}) => {

    const dataStore = useSelector(state => state.store.dataStore);
    const dispatch = useDispatch();
    const productId = match.params.detail;
    const filterProduct = dataStore.filter(ds=>ds.id===parseInt(productId))

    return (
        <div className='productContainer'>
            <div className='productsImg'>
                <img src={filterProduct[0].imageUrl} alt='prodImg'/>
            </div>
            <div className='productDetailText'>
                <h2>{filterProduct[0].name}</h2>
                <p><strong>Price</strong> : {filterProduct[0].price}</p>
                <p><strong>Description</strong> : {filterProduct[0].description}</p>
                <button className='btnAddcart' onClick={()=>dispatch(onAddCart(filterProduct[0].name,filterProduct[0].price))}>Add To Cart</button>
            </div>
        </div>
    )
}

export default withRouter(ProductDetails)



