import { Outlet } from 'react-router-dom';
import { Navigation, StyledLink } from './App.styled';

const Layout = () => {
  return (
    <>
      <header>
        <Navigation>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Navigation>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
export default Layout;
