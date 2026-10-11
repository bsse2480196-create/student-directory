function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.242.656a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
    </svg>
  );
}

function AppNavbar({ brand, links }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand fs-4" href="/">{brand}</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => (
              <li className="nav-item" key={link}>
                <a className="nav-link" href="#!">{link}</a>
              </li>
            ))}
          </ul>

          <ul className="navbar-nav me-lg-3">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#!"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Settings
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#!">Profile</a></li>
                <li><a className="dropdown-item" href="#!">Preferences</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#!">Sign out</a></li>
              </ul>
            </li>
          </ul>

          <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group me-2">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
              <span className="input-group-text bg-white"><SearchIcon /></span>
            </div>
            <button className="btn btn-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default AppNavbar;
