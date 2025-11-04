//props destructering 
const InfoCard = ({name, age, occupation}) => {
    return(
        <div>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Occupation: {occupation}</p>
        </div>
    );
}
export default InfoCard;