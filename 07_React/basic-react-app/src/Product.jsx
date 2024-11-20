import "./Product.css";

function Product({ title, price, features }) {
  const styles = { backgroundColor: price > 20000 ? "" : "" };
  return (
    <div className="Product" style={styles}>
      <h3>{title}</h3>
      <h5>Price: ₹{price}</h5>
      {price > 20000 && <p>Discount of 5%</p>}
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
