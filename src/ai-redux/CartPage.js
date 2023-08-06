// CartPage.js
import React, { useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity } from './cartActions';
import cartReducer from './cartReducer';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [state, cartDispatch] = useReducer(cartReducer, cartItems);

  const handleAddToCart = (item) => {
    cartDispatch(addToCart(item));
  };

  const handleRemoveFromCart = (itemId) => {
    cartDispatch(removeFromCart(itemId));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    cartDispatch(updateQuantity(itemId, newQuantity));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => handleAddToCart(item)}>+</button>
          <button onClick={() => handleRemoveFromCart(item.id)}>-</button>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
          />
          <span>Total: {item.price * item.quantity}</span>
        </div>
      ))}
      <div>
        <h3>Total Price: {getTotalPrice()}</h3>
        <h3>Total Quantity: {getTotalQuantity()}</h3>
      </div>
    </div>
  );
};

export default CartPage;
