import React, {useState} from 'react'

import Calculator from './Calculator'


function App() {

      const [result, setResult] = useState([]);
      const [currentCalculation , setCurrentCalculation ] = useState([])
      // console.log("result", result);
      // console.log("cc",currentCalculation);

  return (
    <div id="container">
      <div id="ComputerOutput">
        <div  id="display">{currentCalculation}</div>
        <div  id="total">{result}</div> 
      </div>  
        <Calculator result={result} setResult={setResult} currentCalculation={currentCalculation} setCurrentCalculation={setCurrentCalculation}  />
    </div>


  );
}

export default App;
