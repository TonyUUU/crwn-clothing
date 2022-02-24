import React from 'react';

import { CustomButtonContainer } from './custom-button.style';

const CustomButton = ({ children, ...others }) => (
  <CustomButtonContainer {...others}>{children}</CustomButtonContainer>
);

export default CustomButton;
