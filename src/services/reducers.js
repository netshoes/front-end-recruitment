import { combineReducers } from 'redux';
import productsReducer from './products/reducer';
import sortReducer from './sort/reducer';
import filterReducer from './filter/reducer';
import floatCartReducer from './floatCart/reducer';
import cartTotalReducer from './cartTotal/reducer';

export default combineReducers({
  shelf: productsReducer,
  cart: floatCartReducer,
  total: cartTotalReducer,
  filters: filterReducer,
  sort: sortReducer,
});
