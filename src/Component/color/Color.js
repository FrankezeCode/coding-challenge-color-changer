import React from 'react'
import ".././color/color.css"

const Color = ({colorValue}) => {
  return (
    <div className='container' >
       <div className='color' style={{backgroundColor: colorValue}}>
        <p>{colorValue ? colorValue:"Empty value"}</p>
       </div>
    </div>
  )
}

Color.defaultProps ={
  colorValue: 'Empty color Value'
}

export default Color