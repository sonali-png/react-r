
const ProductInfo = ({name, price, children}) => {
    return (
        <div className="product-info">
            <div className="name" style={{fontSize: "20px", fontWeight: "bold", paddingBottom: "10px"}}>{name}</div>
            <div className="price" style={{color: "#333", paddingBottom: "10px"}}><strong>₹{price}</strong></div>
            <div className="description" style={{ paddingBottom: "10px"}}>{children}</div>
        </div>
    )
}
export default ProductInfo;