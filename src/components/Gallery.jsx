import { useParams } from "react-router-dom";

const Gallery = () => {
  const { movieId } = useParams();

  
  return (
    <>
      <h2>Gallery: {movieId}</h2>
    </>
  );
};

export default Gallery;