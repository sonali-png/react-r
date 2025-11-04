const Button = ({text, variant}) => {
    const style = variant === "primary" ?  {backgroundColor:"#ff9f00"} :  {backgroundColor:"#fb641b"};
    return (
        <div>
            <button className={variant} style={style}>{text}</button>
        </div>
    );  
}
export default Button;