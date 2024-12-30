''

import { useEffect } from "react";

const CursorTrail = ({ index, opacity }) => {
    useEffect(() => {
      const cursor = document.querySelector(`.cursor-${index}`);
      cursor.x = 0;
      cursor.y = 0;
  
      return () => {
        cursor.x = null;
        cursor.y = null;
      };
    }, [index]);
  
    return (
      <div
        className={`cursor cursor-${index} absolute h-[3px] w-[3px] bg-gray20 rounded-full z-20 pointer-events-none`}
        style={{ opacity }}
      />
    );
  };

  export default CursorTrail;