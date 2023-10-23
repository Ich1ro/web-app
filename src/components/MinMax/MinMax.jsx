import React from 'react'
import './style.css'

const MinMax = ({title}) => {
  return (
    <div className='minmax'>
        <h5 className="minmax_title">
            {title}
        </h5>
        <div className="minmax_inputs">
            <input type="text" placeholder='Min'/>
            <input type="text" placeholder='Max'/>
        </div>
    </div>
  )
}

export default MinMax