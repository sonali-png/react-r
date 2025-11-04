
const Card = (props) => {
    return(
        <div style={
            {
                backgroundColor: "rgba(254, 254, 254, 1)",
                padding: "20px", 
                margin: "20px",
                display: "inline-block", 
                minWidth: "150px", 
                minHeight: "200px",
                borderRadius: "20px", 
                boxShadow: "5px 5px 10px rgba(239, 239, 239, 1)"
            }
        }> {props.children}</div>
    );
}
export default Card;