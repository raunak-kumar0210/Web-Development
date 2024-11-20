import Product from "./Product.jsx";

function ProductTab() {
    
    let styles = {
        display: "flex",
        flexwrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    };

    return (

        <div style={styles}>
            
            <Product title="Logitech MX Master" idx={0}/>
            <Product title="Apple Pencil (2nd gen)" idx={1}/>
            <Product title="Zebronics Zeb-transformers" idx={2}/>
            <Product title="Portronics Toad 23" idx={3}/>
        </div>
    );
}

export default ProductTab