import React from 'react';
import { Link } from 'gatsby';

const Sidebar = () => {
  return (
    <aside className="col-12 col-md-3 p-0 bg-dark sticky-top" id="sidebar">
      <nav className="navbar navbar-dark p-0 text-end align-items-center navbar-expand-md text-md-start d-md-grid justify-content-md-center">
        <p className="navbar-brand text-nowrap p-0 my-4 mx-3 mx-lg-4 fs-2">
          Jack Krone
        </p>
        {/* navbar-brand prob not necessary */}
        <hr className="bg-light mt-0" style={{ opacity: '0.5' }} />
        <button
          type="button"
          className="navbar-toggler border-0 order-1 me-3"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse order-last mx-4 me-md-0 ms-md-2 ms-lg-3"
          id="nav"
        >
          <hr className="bg-light mt-1" style={{ opacity: '0.5' }} />
          <ul className="navbar-nav flex-column w-100 fs-4 mb-3">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/thoughts" className="nav-link active">
                Thoughts
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link active">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutme" className="nav-link active">
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/connect" className="nav-link active">
                Connect
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/other-things" className="nav-link">
                Other things
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
