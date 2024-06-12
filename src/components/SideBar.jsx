function SideBar() {
  const showNavBarClassName = "sidebar-overlay show";
  // const showNavBarClassName = "sidebar-overlay";

  return (
    <div className={showNavBarClassName}>
      <aside className="sidebar">
        {/* close */}
        <button onClick={() => {}} className="sidebar-close">
          <i className="fa fa-times"></i>
        </button>
        {/* links */}
        <ul className="sidebar-links">
          <li>
            <a href="#" className="sidebar-link">
              <i className="fa fa-home fa-fw"></i>
              home
            </a>
          </li>
          <li>
            <a href="#" className="sidebar-link">
              <i className="fa fa-couch fa-fw"></i>
              products
            </a>
          </li>
          <li>
            <a href="#" className="sidebar-link">
              <i className="fa fa-book fa-fw"></i>
              about
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default SideBar;
