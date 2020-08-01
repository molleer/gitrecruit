import Styled, { keyframes } from "styled-components";

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange; }
`;

export const TypeWriter = Styled.h1`
  overflow: hidden; 
  border-right: .15em solid orange; 
  white-space: nowrap; 
  margin: 0 auto; 
  letter-spacing: .15em; 
  animation: 
    ${typing} 3.5s steps(30, end),
    ${blinkCaret} .75s step-end infinite;
  max-width: 410px;
`;
