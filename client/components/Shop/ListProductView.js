import React from 'react';

const ListProductView = ({product}) => (
  <li>
    <div className="list-content">
      <img src={product.photos[0].image} />
      <h4>{product.title}</h4>
      <p>$ {product.price}</p>
      <button type="submit" className="btn-add-to-cart">
        ADD TO CART
      </button>
    </div>
  </li>
);

export default ListProductView;
