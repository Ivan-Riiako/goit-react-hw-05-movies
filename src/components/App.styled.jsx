import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  color: black;
  text-decoration: none;
  &.active {
    color: orange;
  }
  &.a {
    text-decoration: none;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  border-bottom: 3px solid gray;
  /* box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%); */
`;
