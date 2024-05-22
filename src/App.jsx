import { useState } from "react";

function App() {
  const [name, setName] = useState("Sofia");
  return (
    <div>
      <h1>Teacher name: {name}</h1>
      <ul>
        <li onClick={()=>setName("Data")}>Data</li>
        <li onClick={()=>setName("Reyes")}>Reyes</li>
        <li onClick={()=>setName("Yolanda")}>Yolanda</li>
      </ul>
    </div>
  );
}

export default App;
