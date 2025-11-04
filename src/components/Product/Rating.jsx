
const Rating = ({ratings=1}) => {
    const totalStars = 5;
    return ( 
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          style={{ color: index < ratings ? '#ff9f00ff' : '#ccc', fontSize: '24px', marginRight: '4px' }}
        >
          ★
        </span>
      ))}
    </div>
    );
}
export default Rating;