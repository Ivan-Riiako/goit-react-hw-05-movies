import { Route, Routes } from 'react-router-dom';

// import Cast from './Cast';
// import Reviews from './Reviews';
import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';

import { StyledLink, Navigation } from './App.styled';

export const App = () => {
  return (
    <>
      <Navigation>
        <StyledLink to="/" end> Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </>
  );
};
