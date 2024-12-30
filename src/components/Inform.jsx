import React from 'react'

const Inform = ({title, content}) => {
  return (
    <div className={title}>
        <div className={`${title}-title`}>{title}</div>
        <div className={`${title}-content`}>
          {content}
        </div>
    </div>
  )
}

export default Inform