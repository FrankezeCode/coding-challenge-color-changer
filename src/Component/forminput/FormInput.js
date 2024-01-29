import React from 'react'
import '.././forminput/formInput.css'

const FormInput = ({colorValue, setColorValue}) => {
  return (
    <div className='container'>
        <form className='form' onSubmit={(e)=>e.preventDefault()}>
            <input 
             type='text' 
             placeholder='Enter color' 
             autoFocus 
             required
             value={colorValue} 
             onChange={(e)=> setColorValue(e.target.value)}
             />
            
        </form>
    </div>
  )
}

export default FormInput