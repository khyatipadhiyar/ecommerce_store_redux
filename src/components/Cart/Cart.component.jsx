
import React from 'react'
import './Cart.style.css';
import CartItem from '../CartItems/CartItem.component'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';

const Cart = () => {
    const cartDisplay = useSelector(state=>state.cartDisplay.cardDisplay);
    const cartItemList = useSelector(state=>state.cartItemList.cartItemList);

    let cartClass = 'cartContainer' 
    if(cartDisplay===false){
        cartClass= cartClass+' cartNoDisplay'
    }

    //calculat total
    let total=0;
    cartItemList.forEach(cal=>{
        let itemTotal=parseInt(cal.itemPrice)* parseInt(cal.qty);
        total=total+itemTotal;
    })

    return (
        <div className={cartClass}>
            <h3>My Awesome Items</h3>
            {cartItemList.map((cartItems)=>(  
            <CartItem key={cartItems.id}
            cartItems={cartItems}/>
            ))}
            <Link to='/hireme'>
                <button className='checkoutBtn'>CheckOut Total = {total}</button>
            </Link>
        
        </div>
    )
}

export default Cart

