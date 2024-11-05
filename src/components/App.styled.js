import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import { NavLink } from 'react-router-dom';

export const GlobalStyled = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

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
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;
