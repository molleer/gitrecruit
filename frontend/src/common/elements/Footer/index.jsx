import React from 'react';
import {FooterWrapper} from './Footer.style';
import {Typography} from '@material-ui/core';

const Footer = () => (
  <FooterWrapper>
    <Typography variant="subtitle1">
      Icons made by{' '}
      <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">
        Good Ware
      </a>{' '}
      from{' '}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </Typography>
  </FooterWrapper>
);

export default Footer;
