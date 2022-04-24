import ReactDOM from "react-dom";
import React from "react";

export default function App() {
  return (
    <div>
      <h1>Hello ESBuild starter</h1>
      <h2>Make your build more faster</h2>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
