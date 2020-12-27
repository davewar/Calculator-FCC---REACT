import React from 'react'
import {data} from './data'

// console.log(data);

const Calculator = ({result, setResult, currentCalculation , setCurrentCalculation}) => {
    
    // const [currentVal,setCurrentVal] = useState([])   

    const numnBrs = ["0","1","2","3","4","5","6","7","8","9"];
    const dot = ["."];
    const operator = ["+","-","/","*","+"];


const getTotal = () => {  

//   let res = "";
  
  
      if(currentCalculation ===[0]){
          setResult([0])

      } else{
      
       let calculation  = currentCalculation.join("")

        try{
             calculation = eval(calculation)
          // console.log(calculation);
         setResult([calculation])
         setCurrentCalculation ([calculation])

        } catch(err){
          setCurrentCalculation([]) 
          setResult([])
          alert("Invalid calculation, please try again")

        }


       

        
      }
  
  
  
}

const  updateCalc = (values) => {  
   
    setCurrentCalculation([...currentCalculation, values])

}


const  updateResult = (values) => {

            // console.log(values);
          
          if(numnBrs.includes(values)){    //rec'd a num
                     
                        //    console.log("here");

                  if(result == "/" || result == "+" || result == "-" || result == "*"){
                                // not an operator , so add number//
                        setResult([values])
                         updateCalc(values)
                    
                  } else if(result.length==1 && result =="0" && values=="0") {
                        // console.log("dup zero")
                        // do nothing
                    
                  } else if(result.length==1 && result =="0" && values!="0") {
                        console.log("original zero then a number")
                     
                          setResult([values])
                          updateCalc(values)
                  }
                  else{
                        
                        // result = result.concat(values);  // result is an operator, so change to current value
                        setResult([...result, values])
                      
                       updateCalc(values)
                  }
            
          } else if (operator.includes(values)){     //recd a  + /    ///////////////////
           
                        if(result === "/" || result === "+" || result === "-" || result === "*" ){
                           // do nothing 
                         setResult( [values])
                          updateCalc(values)
                        } else {

                          setResult( [values])
                          updateCalc(values)
                        }   
          } else if (dot.includes(values)){     //recd a  dot
                
             if(result.join("").slice(-1) === ".") {
                 //do nothing
                    //  console.log("dup dot")
             }  else if(result.join().includes(".")){
                 //do nothing
                    //  console.log("more than 1dot") //
             }            
            else {
               setResult([...result, values])
               updateCalc(values)
            }
        }
    
      }     // end of update function  
                


    const buttonPressed = (e) =>{

        // console.log(e.target.value);
           let val = e.target.value
          
        if(val == "clear"){
        
        setCurrentCalculation([]) 
        setResult([])
       
        
      } else if(val === "="){    
     
            val = getTotal() // <<total
       
      }  else if(val === "=="){  
        //do nothing
  
      
      }else{   // recd a number or operator
        
      
         updateResult(val)
        
      }




    }


    return (
         <div id="calculator">

                 {
                     data.map( btn => {

                        const {class : item, id, value, text } = btn

                        return <button key={id} className={item} id={id} onClick={buttonPressed} value={value}>{text}</button>


                     })

                 }   
    
               
  
                 </div>


    )
}


export default Calculator
