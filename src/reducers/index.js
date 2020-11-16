import { combineReducers } from 'redux'
import { productListReducer, productDetailsReducer } from './productReducer'
import { cartReducer } from './cartReducers'

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
})

export default rootReducer
