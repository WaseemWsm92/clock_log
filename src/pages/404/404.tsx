import { Link } from 'react-router-dom';
import './404.scss';

const PageNotFound = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-found-wrapper d-flex align-center justify-center flex-column">
          <div className="page-found-heading"><h2 className="title-color m-0">4<span className="secondary-color">0</span>4 </h2></div>
          <h2 className="title-color fs-32 m-0 text-center">Page <span className="primary-color">Not</span>&nbsp;Found</h2>
          <p className="title-color fs-16 m-0 text-center d-block">Sorry, we couldn't find the page you are looking for...</p>
          <Link to="/" className="bgSecondary-color text-white fs-18 fw-500 cursor-pointer" >Back to Home</Link>
        </div>
      </div>
    </>
  )
};

export default PageNotFound;
