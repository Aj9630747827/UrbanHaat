import logo from "../assets/logo.png";
function LogoLabel() {
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container d-flex justify-content-center">
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              className="img-fluid"
              style={{ maxHeight: "70px", width: "auto" }}
            />
          </a>
        </div>
      </nav>
    </>
  );
}
export default LogoLabel;
