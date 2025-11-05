function DummyEvent() {
    const Shoot = (message, event) => {
        alert(`Shoot ! ${message} ${event.type}` );
    }
    return (
        <div>
            <button onClick={ (event)=> Shoot("Towards me!", event)}>Take a shot</button>
        </div>
    )
}
export default DummyEvent;
