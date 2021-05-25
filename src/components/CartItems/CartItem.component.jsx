import React from 'react'
import './cartItem.style.css'
import {onPlusClick,onMinusClick,onRemoveClick} from '../../actions'
import {useDispatch} from 'react-redux';

const CartItem = ({cartItems}) => {
    const dispatch = useDispatch();
    
    return (
        <div className='itemContainer'>
            <div className='itemText'>
                <p className='item'>{cartItems.itemName}</p>
                <p className='item'>{cartItems.itemPrice}</p>
                <p className='item'>
                    <i className="fas fa-plus-circle" onClick={()=>dispatch(onPlusClick(cartItems.id))}></i>
                </p>
                <p className='item'>{cartItems.qty}</p>

                <p className='item'>
                    <i className="fas fa-minus-circle" onClick={()=>dispatch(onMinusClick(cartItems.id))}></i>
                </p>
                <p className='item'>= {parseInt(cartItems.itemPrice)* parseInt(cartItems.qty)}</p>
                <p className='item' onClick={()=>dispatch(onRemoveClick(cartItems.id))}><i className="fas fa-window-close"></i></p>
            </div>
          
        </div>
    )
}

export default CartItem