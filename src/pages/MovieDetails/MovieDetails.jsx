import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);

  return (
    <>
      <h1>MovieDetails: {movieId}</h1>;
      <ul>
        <li>
          <Link to="details">Details</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default MovieDetails;
