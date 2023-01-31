import React from 'react'
import {FaCrown} from 'react-icons/fa'

const SectionHeader = ({icons,title,className}) => {
  return (
    <div className={`section__head ${className}`}>
    <span>
        {icons}
        <h2>{title}</h2>
    </span>
</div>
  )
}

export default SectionHeader