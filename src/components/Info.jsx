import infoData from '@/data/infoData'
import React from 'react'

const Info = () => {
  return (
    <>
      {infoData.map((content, index) => 
        <div key={index} className='info-containter'>
          <div className='info-title'>{index + 1}</div>
          <div className='info-content'>{content.content}</div>
        </div>
      )}
    </>
  )
}

export default Info