import { useContext } from "react";
import LogoLabel from "./LogoLabel";
import { PageContext } from "../store/PageContextProvider";

function Header() {
  const { page, setPage } = useContext(PageContext);

  return (
    <>
      <LogoLabel />

      <nav className="navbar navbar-expand-lg bg-body-tertiary animated-shadow">
        <div className="container-fluid d-flex flex-column">
          {/* Centered Toggle Button on Mobile */}
          <div className="d-flex justify-content-center d-lg-none w-100 py-2">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex justify-content-center align-items-center w-100">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    page === "home" ? "active fw-bold" : ""
                  }`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage("home");
                  }}
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link ${
                    page === "products" ? "active fw-bold" : ""
                  }`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage("products");
                  }}
                >
                  Products
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link ${
                    page === "cart" ? "active fw-bold" : ""
                  }`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage("cart");
                  }}
                >
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
