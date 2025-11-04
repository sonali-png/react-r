const ProductImage = ({src, alt="default"}) => {
    return (
        <div className="product-image">
            <img 
                src={src} 
                alt={alt} 
                style={
                        {
                            height: "300px",
                            width:  "250px"
                        }
                    }
            ></img>
        </div>
    )
}
export default ProductImage;