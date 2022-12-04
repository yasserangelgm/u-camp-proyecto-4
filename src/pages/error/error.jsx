import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <div className="container">
        <h1>Oops</h1>
        <p>La página no existe</p>
        <Link to="/">Volver a la página principal</Link>
      </div>
    </>
  );
};

export default ErrorPage;
