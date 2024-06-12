function NavBarLinks() {
  return (
    <div>
      <button onClick={() => {}} className="toggle-nav">
        <i className="fa fa-bars"></i>
      </button>
      <ul className="nav-links">
        <li>
          <a href="#" className="nav-link">
            home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            products
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            about
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBarLinks;
