import React from 'react';

const Line = ({width, height, position}) => {
  return (
    <div className={`absolute w-[${width}px] h-[${height}px] 
                     ${height=== 1?`t-[${position}]`:`l-[${position}`}
                    `}>
    
    </div>
  );
};

export default Line;
