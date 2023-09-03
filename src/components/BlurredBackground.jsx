import React from 'react'

const BlurredBackground = ({className}) => {
  return (
    <div className={className?className:'blurred-bg'}>
        <div className='bubble'></div>
        <div className='bubble'></div>
        <div className='bubble'></div>
    </div>
  )
}

export default BlurredBackground