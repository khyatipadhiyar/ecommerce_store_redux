export const cartClick = () => {
    return {
        type: 'CART_CLICK'
    };
};

export const onPlusClick = (id) =>{
    return {
        type:'ON_PLUS_CLICK',
        payload:{'id':id}
    }
}

export const onMinusClick = (id) =>{
    return {
        type:'ON_MINUS_CLICK',
        payload:{'id':id}
    }
}
export const onRemoveClick = (id) =>{
    return {
        type:'ON_REMOVE_CLICK',
        payload:{'id':id}
    }
}
export const onAddCart = (name,price) =>{
    return {
        type:'ADDCART_ITEM',
        payload: {'id':Math.floor(Math.random() * 5000),'itemName':name,'itemPrice':price,'qty':1}
    }
}
