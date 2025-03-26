import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

    
function MyComponent() {
    const [count, setCount] = useState(0);  // First state
    const [isOn, setIsOn] = useState(false); // Second state
  
    return (
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>{isOn ? 'ON' : 'OFF'}</p>
        <button onClick={() => setIsOn(!isOn)}>Toggle</button>
      </div>
    );
  }


const App = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);



