 import { useState } from 'react';
import './App.css';
import Color from './Component/color/Color';
import FormInput from './Component/forminput/FormInput';



function App() {
 
  const [colorValue , setColorValue] = useState('')


  return (
    <div>
      <Color colorValue={colorValue}/>
      <FormInput
       colorValue={colorValue} 
       setColorValue={setColorValue}
      />
    </div>
  );
}

export default App;
