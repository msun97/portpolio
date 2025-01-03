import React from 'react'
import ListArrow from './ListArrow'

const ProjectList = ({name, iconClassName, className}) => {
  return (
    <li className={`flex items-center gap-[24px] ${className}`}>
      <ListArrow className={iconClassName}/>
      {name}
    </li>
  )
}

export default ProjectList