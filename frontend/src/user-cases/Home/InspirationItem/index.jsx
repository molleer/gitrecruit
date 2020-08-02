import React from 'react';
import {IconWrapper, ItemWrapper, TextWrapper} from './InspirationItem.style';
import PropTypes from 'prop-types';

const InspirationItem = ({icon, text, ...props}) => (
  <ItemWrapper {...props}>
    <IconWrapper>{icon}</IconWrapper>
    <TextWrapper center variant="h5">
      {text}
    </TextWrapper>
  </ItemWrapper>
);

InspirationItem.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

export default InspirationItem;
