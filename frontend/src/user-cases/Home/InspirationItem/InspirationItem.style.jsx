/* eslint-disable new-cap */
import Styled from 'styled-components';
import {Typography} from '@material-ui/core';

export const IconWrapper = Styled.div`
  width: 8rem;
  height: 8rem;
  background: orange;
  border-radius: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemWrapper = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 12rem;
`;

export const TextWrapper = Styled(Typography)`
  text-align: center;
  margin-top: 2rem;
`;
