import { Route, Routes } from 'react-router-dom';

// import Cast from './Cast';
// import Reviews from './Reviews';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import { GlobalStyle } from './GlobalStyle.styled';
import Layout from './Layout';
import Details from './Details';
import Gallery from './Gallery';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="details" element={<Details />} />
            <Route path="gallery" element={<Gallery />} />
          </Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

// export const App = () => {
//   return (
//     <>
//       <Layout />
//       <Routes>
//         <Route path="/" element={<Layout />} />
//         <Route path="/movies" element={<Movies />} />
//         <Route path="/movies/:movieId" element={<MovieDetails />} />
//       </Routes>
//       <GlobalStyle />
//     </>
//   );
// };