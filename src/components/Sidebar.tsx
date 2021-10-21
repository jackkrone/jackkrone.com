import React from 'react';
import { Link } from 'gatsby';

const Sidebar = () => {
  return (
    <aside
      className="col-12 col-md-3 p-0 bg-dark"
      /* Note I want to set a max width that doesn't interfere with col-12 for xs and s screens */
    >
      <nav
        className="navbar navbar-expand-md navbar-dark bd-dark flex-md-column flex-row text-end text-md-start align-items-center py-2 sticky-top "
        id="sidebar"
      >
        <p className="text-nowrap m-3 text-white fs-2">Jack Krone</p>
        <hr /* make this show up at some point */ />
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
          className="collapse navbar-collapse order-last me-4 me-md-0"
          id="nav"
        >
          <ul className="navbar-nav flex-column w-100 fs-4">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link active">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/thoughts" className="nav-link active">
                Thoughts
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
