import React from 'react'

const Timelinelist = ({title,data,description,address,skills}) => {
  return (
   <li className='timeline-item'>
    <h4 className='h4 timeline-item-title'>{title}</h4>
    <span className=''>{data}</span>
    <p className='timeline-text'>{description}</p>
    <p className='timeline-text'>{address}</p>
    <span>{skills}</span>
    </li>
  )
}

export default Timelinelist