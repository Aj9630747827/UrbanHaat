import { useContext } from "react";
import { PageContext } from "../store/PageContextProvider";
import Home from "./main/Home";
import Cart from "./main/Cart";
import Products from "./main/Products";

function MainPage() {
  const { page } = useContext(PageContext);
  return (
    <>
      {page == "home" ? <Home /> : page == "products" ? <Products /> : <Cart />}
    </>
  );
}
export default MainPage;
