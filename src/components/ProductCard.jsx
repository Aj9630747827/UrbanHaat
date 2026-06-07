function ProductCard({ product }) {
  return (
    <div className=" glow-card">
      <div className=" card" style={{ width: "18rem", minHeight: "430px" }}>
        <img
          src={product.thumbnail}
          className="card-img-top"
          alt={product.title}
          style={{
            height: "220px",
            objectFit: "cover",
          }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.title}</h5>

          <p className="card-text">{product.description.slice(0, 60)}...</p>

          <h6 className="mb-3 text-warning fw-bold">${product.price}</h6>

          <button className="btn btn-dark mt-auto">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
