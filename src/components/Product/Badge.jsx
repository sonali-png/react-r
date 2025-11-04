const Badge = ({text, color}) => {
    const bgColor = text === 'Sale' ? "#26a541": (text === "New" ? "#667eea" : (text === "Trending" ? "#667eea" : ""));
    return (
        bgColor &&
        <div style={{marginBottom: "20px"}}>
            <span style={ {color: "#f5f5f5", marginBottom: "20px", backgroundColor: bgColor, padding: "5px 20px"} }>{text}</span>
        </div>
    )
}
export default Badge;