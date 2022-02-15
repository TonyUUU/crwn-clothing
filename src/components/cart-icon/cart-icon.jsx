import React from 'react';
import { connect } from 'react-redux';

import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

const CartIcon = ({ toggleCartHidden, cartItems }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>
      {cartItems.reduce(
        (quantity, cartItem) => quantity + cartItem.quantity,
        0
      )}
    </span>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems: cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
