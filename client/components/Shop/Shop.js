import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../../store/products';

class Shop extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const {products} = this.props;
    return (
      <div className="shop-main">
        <h2>Shop</h2>
        <div>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <img src={product.photos[0].image} />
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <p>{product.size}</p>
                <p>{product.color}</p>
                <p>{product.stock}</p>
                <p>{product.price}</p>
              </li>
            ))}
          </ul>
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
