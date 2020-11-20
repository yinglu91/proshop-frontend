import { combineReducers } from 'redux'
import { productListReducer, productDetailsReducer } from './productReducer'
import { userLoginReducer, userRegisterReducer } from './userReducer'
import { cartReducer } from './cartReducers'

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer
})

export default rootReducer
