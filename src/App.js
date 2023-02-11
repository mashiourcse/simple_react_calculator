import '../src/calculator.css';
import {useEffect, useState} from 'react';
function App() {

  const [inputValue, setInputValue] = useState('0');
  const [inputValue2, setInputValue2] = useState('0');
  const [fcall, setFCall] = useState(false);
  const [functionValue, setFunctionValue] = useState(null);
  const [negative, setNegative] = useState(false);

  const negatify = (e) =>{

    setNegative(!negative);
    if(negative){
      setInputValue('-'+inputValue);
    }else{
      const newStr = inputValue.slice(1);
      setInputValue(newStr);
    }

  }
  const handleNumber = (e)=>{
  
    
    if(fcall){
      setInputValue(e.target.value);
      setFCall(false);
    }else if(inputValue == '0' && e.target.value == '.'){
      setInputValue(inputValue+e.target.value);
  
    }else if(inputValue == '0' ){
      setInputValue(e.target.value);
    }else{
      setInputValue(inputValue+e.target.value);
    }
  }
  const handleFunction = (e)=>{
    const val = e.target.value;

    if(val=='C'){
      setInputValue('0');
    }
    else if(val=='DEL'){
      
      const newStr = inputValue.slice(0, -1);
      setInputValue(newStr);
    }
    else if(val=='/' || val=='X' || val=='-' || val=='+' || val=='%'){
      setFCall(true);
      setFunctionValue(e.target.value);
      setInputValue2(inputValue);
    }else if(val=='='){
      switch(functionValue){
        case '/':
          setInputValue((inputValue2%inputValue).toFixed(10));
          break;
        case 'X':
          setInputValue((inputValue2%inputValue).toFixed(10));
          break;
        case '-':
          setInputValue((inputValue2%inputValue).toFixed(10));
          break;
        case '+':
          setInputValue((inputValue2%inputValue).toFixed(10));
          break;
        case '%':
          setInputValue((inputValue2%inputValue).toFixed(10));
          break;
          }

        setInputValue2(null);
    }
  }

  useEffect( ()=>{
    if(inputValue=='') setInputValue('0');
  },[inputValue])
  return (
    <>    
    <div className='myApp'>
    
    <div className="card">

    <div className="calc-head">
        <input type="text" id="result" maxLength="10" value={inputValue}/>
    </div>

    <div className="calc-body">
        <div>
            <div>
            <input type="button" className="btn" value="C" onClick={handleFunction}/>
            <input type="button" className="btn" value="+/-" onClick={negatify}/>
            <input type="button" className="btn" value="%" onClick={handleFunction}/>
            <input type="button" className="btn btn-style" value="/" onClick={handleFunction}/>    
            </div>
            
            <div>
            <input type="button" className="btn" value="7" onClick={handleNumber} />
            <input type="button" className="btn" value="8" onClick={handleNumber} />
            <input type="button" className="btn" value="9" onClick={handleNumber} />
            <input type="button" className="btn btn-style" value="X" onClick={handleFunction}/>
            </div>
            
            <div>
            <input type="button" className="btn" value="4" onClick={handleNumber}/>
            <input type="button" className="btn" value="5" onClick={handleNumber}/>
            <input type="button" className="btn" value="6" onClick={handleNumber}/>
            <input type="button" className="btn btn-style" value="-" onClick={handleFunction}/>
            </div>
            
            <div>
            <input type="button" className="btn" value="1" onClick={handleNumber}/>
            <input type="button" className="btn" value="2" onClick={handleNumber} />
            <input type="button" className="btn" value="3" onClick={handleNumber}/>
            <input type="button" className="btn btn-style" value="+" onClick={handleFunction}/>
            </div>
            
            <div>
            <input type="button" className="btn" value="0" onClick={handleNumber}/>
            <input type="button" className="btn" value="." onClick={handleNumber}/>
            <input type="button" className="btn" value="DEL" onClick={handleFunction}/>
            <input type="button" className="btn" value="=" style={{backgroundColor: "orange"}} onClick={handleFunction}/>
            </div>
        </div>
    </div>
</div>
</div>
</>

  );
}

export default App;
