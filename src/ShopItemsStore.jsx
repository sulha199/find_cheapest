import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import ShopItemsReducer from './ShopItemsReducer.jsx';
const ShopItemsStore = createStore(ShopItemsReducer);
export default ShopItemsStore;

export default function ShopItemsStore(initialState){
  return createStore(
    ShopItemsReducer,
    initialState,
    applyMiddleware(thunk)
  )
}
