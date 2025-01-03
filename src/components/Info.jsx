import infoData from '@/data/infoData'
import React from 'react'

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Info = () => {
  return (
    <div className='flex gap-[80px]'>
      {infoData.map((content, index) => 
        <div key={index} className='flex flex-col gap-[30px] info-containter w-[350px] text-[24px]'>
          <div className={`info-title border-b-2 text-[40px] p-[5px] flex w-full items-center gap-[20px]`}
          style={{marginTop: `${0 + index * 130}px` }}
          >
            <div className='index'>{index + 1}</div>
            <MdOutlineKeyboardArrowDown />
          </div>
          <div className='info-content'>{content.content}</div>
        </div>
      )}
    </div>
  )
}

export default Info