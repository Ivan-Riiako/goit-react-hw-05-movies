import { Link } from "react-router-dom";

export const Movies = () => {
  return (
    <div>
      {['movi-1', 'movi-2', 'movi-3', 'movi-4', 'movi-5'].map(movi => {
        return (
          <Link key={movi} to={`${movi}`}>
            {movi}
          </Link>
        );
      })}
    </div>
  );
};
export default Movies;