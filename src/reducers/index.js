import cartDisplayReducer from './cartDisplay.reducer';
import cartItemListReducer from './cartItemList.reducer';
import dataStoreReducer from './dataStore.reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {combineReducers} from 'redux';

const persistConfig ={
    key:'root',
    storage,
    whitelist:['cartDisplay','cartItemList']
}

const allReducer =  combineReducers({
    store:dataStoreReducer,
    cartDisplay:cartDisplayReducer,
    cartItemList:cartItemListReducer
})
export default persistReducer(persistConfig,allReducer);
