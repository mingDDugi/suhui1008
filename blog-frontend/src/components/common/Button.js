import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import palette from "../../lib/styles/palette";

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: black;
  outline: none;
  cursor: pointer;

background:${palette.love1[0]};
box-shadow: 2px 2px 2px 2px gray;
opacity: 100%;
  &:hover{
    background: ${palette.love1[0]};
    transform: scale(1.1);
}

${props =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${props =>
    props.cyan &&
    css`
     background:${palette.love1[0]};
box-shadow: 2px 2px 2px 2px gray;
     
      &:hover {
        background: ${palette.love1[0]};
        transform: scale(1.1);
      }
    `}
    &:disabled {
      background: ${palette.love1[0]};
      color: ${palette.love1[1]};
      cursor: not-allowed;
    }
`;
const StyledButton = styled.button`
  ${buttonStyle}
`;
const StyledLink = styled(Link)`
  ${buttonStyle}
`;
const Button = props => {
  return props.to ? (
    <StyledLink {...props} cyan={props.cyan ? 1 : 0}/>
  ) : (
    <StyledButton {...props} />
  );
};

export default Button;