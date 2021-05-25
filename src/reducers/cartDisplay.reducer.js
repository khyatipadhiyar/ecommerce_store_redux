const initialState = {cardDisplay:false}

const cartDisplayReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'CART_CLICK':
            return {...state, cardDisplay:!state.cardDisplay}
        case 'ADDCART_ITEM':
            return {...state, cardDisplay:true}
        default:
            return state;
    }
}
export default cartDisplayReducer;