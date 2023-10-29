import React from 'react';

import { ACTION_TYPES } from '../utils/cartActionTypes';

function CartItem({ item, dispatch }) {
  const { productId, quantity, product } = item;

  const handleIncrement = () => {
    dispatch({ type: ACTION_TYPES.UPDATE, productId });
  };

  const handleDecrement = () => {
    dispatch({ type: ACTION_TYPES.DELETE, productId });
  };
  console.log(item)

  return (<>
    {product && (
      <div className="cart-item">
        <div key={productId} className="cart-item__content">
          <div className="cart-item__product-info">
            <div className="cart-item__thumbnail">
              <img src={product.thumbnail} alt="Product Thumbnail" />
            </div>
            <div className="cart-item__details">
              <p className="cart-item__title">{product.title}</p>
              <p className="cart-item__description">{product.description}</p>
              <div className="cart-item__product-details">
                <p className="cart-item__detail">Product Details:</p>
                <p className="cart-item__detail">Title: {product.title}</p>
                <p className="cart-item__detail">Description: {product.description}</p>
                <p className="cart-item__detail">Price: {product.price}</p>
              </div>
            </div>
          </div>
          <div className="cart-item__quantity-controls">
            <button className="cart-item__button" onClick={handleDecrement}>
              -
            </button>
            <span className="cart-item__quantity-value">{quantity}</span>
            <button className="cart-item__button" onClick={handleIncrement}>
              +
            </button>
          </div>
        </div>
        <hr className="cart-item__divider" />
      </div>
    )}</>
  );
}

export default CartItem;