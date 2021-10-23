import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found container mx-auto text-center">
      <h2 className="text-4xl mt-4 text-red-400">Sorry 404</h2>
      <p className="text-3xl my-4">That page cannot be found</p>
      <Link className="text-2xl text-blue-600 hover:text-blue-800" to="/">Back to the homepage...</Link>
    </div>
  );
};

export default NotFound;