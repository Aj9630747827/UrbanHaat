import { useContext } from "react";
import logo from "../../assets/logo.png";
import { PageContext } from "../../store/PageContextProvider";
import { FaShoppingCart } from "react-icons/fa";

function Home() {
  const { setPage } = useContext(PageContext);
  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-box px-4 py-5 my-5 mx-5 text-center">
          <img
            className="img-fluid d-block mx-auto mb-4 scale-animation"
            src={logo}
            alt="UrbanHaat Logo"
            style={{
              width: "clamp(200px, 25vw, 250px)",
            }}
          />

          <h1 className="display-4 fw-bold text-dark">
            Welcome to Urban
            <span style={{ color: "#F97316" }}>Haat</span>
          </h1>

          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 text-secondary">
              Discover trendy fashion, premium essentials, and everyday
              must-haves — all in one place. Shop smarter with modern
              collections, affordable prices, and seamless delivery.
            </p>

            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                className="btn btn-dark btn-lg px-4 scale-animation"
                onClick={() => setPage("products")}
              >
                Shop Now <FaShoppingCart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
