import DummyEvent from "./components/Events/DummyEvent";
import { ClassState } from "./components/States/ClassState";
import FunctionState from "./components/States/FunctionState";

function App() {
  return (
    <div className="App">
      <DummyEvent />
      <FunctionState />
      <ClassState />  
    </div>
  );
}
export default App;
