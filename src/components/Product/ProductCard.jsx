const ProductCard = ({children, featured=false}) => {
    const style = featured ? {
        background: "#98B9F2"
    } : {

    }
    // const style = featured ? {border: "1px solid grey"} : {border: "1px solid red"};
    return (
        <div className="product-card" style={style}>
            {children}
        </div>
    )
}
export default ProductCard;