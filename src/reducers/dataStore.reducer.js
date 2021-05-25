import data from '../data/data'
const initialState = {dataStore:data}

const dataStoreReducer = (state=initialState,action)=>{
    switch(action.type){
    
        default:
            return state;
    }
}
export default dataStoreReducer;