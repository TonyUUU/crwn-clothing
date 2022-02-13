import React from 'react';

import './custom-buttom.scss';

const CustomButton = ({ children, isGoogleSignIn, ...others }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...others}
  >
    {children}
  </button>
);

export default CustomButton;
