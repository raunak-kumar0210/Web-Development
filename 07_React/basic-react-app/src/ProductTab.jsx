import Product from "./Product";
import "./Product.css";

function ProductTab() {
  const features = ["Hi-tech", "Durable", "Fast"];
  return (
    <div className="ProductTab">
      <Product title="Phone" price={10000} features={features} />
      <Product title="Laptop" price={30000} features={features} />
      <Product title="Pen" price={10} features={features} />
    </div>
  );
}

export default ProductTab;
