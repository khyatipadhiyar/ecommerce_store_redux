const initialState = {cartItemList:[]}

const cartItemListReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'ADDCART_ITEM':
            let found = 0;
            let pItems = state.cartItemList;
            pItems.forEach(pItem=>{if(pItem.itemName===action.payload.itemName){
                found =1;
            }})
            let newList = [...state.cartItemList];
            if(found===0){
                newList=[...state.cartItemList,{'id':Math.floor(Math.random() * 5000),'itemName':action.payload.itemName,'itemPrice':action.payload.itemPrice,'qty':1}]
            }
            return {...state, cartItemList:newList}
        case 'ON_PLUS_CLICK':
            let newcardItemList = state.cartItemList.map(ncl=>ncl.id===action.payload.id?{...ncl,qty:ncl.qty+1}:ncl)
            return {...state, cartItemList:newcardItemList};
        case 'ON_MINUS_CLICK':
            let newcardItemListm = state.cartItemList.map(ncl=>ncl.id===action.payload.id?{...ncl,qty:ncl.qty-1<0?0:ncl.qty-1}:ncl)
            return {...state, cartItemList:newcardItemListm};
        case 'ON_REMOVE_CLICK':
            let newcardItemListr = state.cartItemList.filter(ncl=>ncl.id!==action.payload.id)
            return {...state, cartItemList:newcardItemListr};
        default:
            return state;
    }
}
export default cartItemListReducer;