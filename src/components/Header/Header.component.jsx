import {Link} from 'react-router-dom';
import './Header.style.css';
import React from 'react';
import {useDispatch} from 'react-redux';
import {cartClick} from '../../actions'

const Header = () => {
    
    const dispatch = useDispatch();
    return (
        <div className='headerContainer'>
            <div className='headerHeading'>
            <h3 className='headerText'>
                <Link to={`/`}>Clothing Store</Link></h3>   
            </div> 
            <div className='headerIcon' onClick={()=> dispatch(cartClick())}>
                <i className="fas fa-cart-plus"></i>
            </div>
        </div>
    )
}

export default Header

 