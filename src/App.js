import React, { useState } from "react";
import FormComp from "./components/FormComp"
import Results from "./components/Results"


function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email:"",
    password:"",
    cPassword: ""
  });
  return (
    <div>
      <FormComp inputs={state} setInputs={setState}/>
      <Results data={state}/>
    </div>
  );
}

export default App;
