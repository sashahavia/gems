import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../../store/products';
import ListProductView from './ListProductView';

import './Shop.scss';

class Shop extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const {products} = this.props;
    return (
      <div className="shop-main">
        <h2>Shop</h2>
        <div className="product-list">
          <div className="list">
            {products.map(product => (
              <ListProductView product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    products: state.products
  };
};

const mapDispatch = dispatch => {
  return {
    fetchProducts: () => {
      dispatch(fetchProducts());
    }
  };
};

export default connect(mapState, mapDispatch)(Shop);
