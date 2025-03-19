// import { useLocalStorage } from "./components/useLocalStorage";
import "./App.css";
import { useState } from "./components/customUseState";

function App() {
  // const [value, setValue] = useLocalStorage("k", "");
  const [value, setValue] = useState("");
  return (
    <>
      <h2>Custom hook : useLocalStorage</h2>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </>
  );
}

export default App;
