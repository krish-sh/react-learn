import "./App.css";
import { useGlobalContext } from "./context";
import Navbar from "./tutorials/09-context-api/Navbar";

function App() {
  const {name} = useGlobalContext()
  console.log(name);
  
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
