
import Car from "./components/ClassComponents/Car";
// import User from "./components/ClassComponents/User";
// import Welcome from "./components/ClassComponents/Welcome";


function App() {
  return (
    <div className="App">
      {/* <Welcome /> */}
      {/* <User name="Sonali" age="18"/> */}
      {/* <User age="20" /> */}
      <Car brand="BMW" price={50000000} color="Black"/>
    </div>
  );
}
export default App;
