import logoBlack from "../images/logo-black.png";
import logoWhite from "../images/logo-white.png";
import CartIcon from "./CartIcon";
import NavBarLinks from "./NavBarLinks";

function NavBar() {
  // const route = "home";
  const route = "products";
  // const navClass = route === "home" ? "navbar" : "navbar page";
  const navClass = route === "home" ? "navbar" : "navbar page";

  return (
    <nav className={navClass}>
      <div className="nav-center">
        {/* links */}
        <NavBarLinks />
        {/* logo */}
        <img
          src={route === "home" ? logoWhite : logoBlack}
          className="nav-logo"
          alt="logo"
        />
        {/* cart icon */}
        <CartIcon />
      </div>
    </nav>
  );
}

export default NavBar;
