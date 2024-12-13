import { useParams } from "react-router-dom";

const Details = () => {
  const { movieId } = useParams();

  return (
    <>
      <h2>Details: {movieId}</h2>
    </>
  );
};

export default Details;