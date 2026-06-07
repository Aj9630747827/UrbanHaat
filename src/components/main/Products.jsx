import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // Remove unwanted product IDs
        const filteredProducts = data.products.filter(
          (product) =>
            product.id !== 17 &&
            product.id !== 19 &&
            product.id !== 23 &&
            product.id !== 24,
        );

        setProducts(filteredProducts);
      });
  }, []);

  return (
    <div className="d-flex justify-content-center flex-wrap gap-4 my-4 px-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
