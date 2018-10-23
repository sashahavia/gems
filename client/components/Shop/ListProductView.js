import React from 'react';
import {Link} from 'react-router-dom';

const ListProductView = ({product}) => (
  <div id="list-item">
    <div className="list-image">
      <Link to="/">
        <img attr={product.title} src={product.photos[0].image} />
      </Link>
    </div>
    <div className="list-content">
      <h4>{product.title}</h4>
      <p>$ {product.price}</p>
      {/* <button type="submit" className="btn-add-to-cart">
        ADD TO CART
      </button> */}
    </div>
  </div>
);

export default ListProductView;
