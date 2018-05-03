import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import ShopItemsReducer from './ShopItemsReducer.jsx';

export default function ShopItemsStore(initialState){
  return createStore(
    // initialState,
    ShopItemsReducer,
    applyMiddleware(thunk)
  )
}
