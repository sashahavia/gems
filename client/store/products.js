import axios from 'axios';
import history from '../history';

/**
 * ACTION TYPES
 */

const GET_PRODUCTS = 'GET_PRODUCTS';

/**
 * ACTION CREATORS
 */

const getProducts = products => ({
  type: GET_PRODUCTS,
  products
});

/**
 * THUNK CREATORS
 */

export const fetchProducts = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/products');
    dispatch(getProducts(data));
  } catch (err) {
    console.log('Something went wrong. No products...', err);
  }
};

/**
 * REDUCER
 */
const productsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};

export default productsReducer;
