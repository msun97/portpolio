'use client'

import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const Loading = () => {
    const skills = ["", "HTML", "CSS", "JS", "React"];
    const skillRef = useRef();
    const logoRef = useRef();
    const loadingRef = useRef();
  
    useEffect(() => {
      console.log(logoRef.current);
      const tl = gsap.timeline({  
        onComplete : () => {
          const tlLogo = gsap.timeline({
            onComplete : () => {
                setTimeout(() => {
                    const tlLoading = gsap.timeline({
                    })
                    tlLoading.to(loadingRef.current, {
                     duration : 1,
                     opacity : 0,
                    })
                }, 1500);
            }
          })
            tlLogo.to(logoRef.current, {
              duration : 1.5,
              left : 0
            })
            .to(logoRef.current, {
              duration : 0,
              backgroundColor : "#333333",
              color : "#F7F7F7",
              delay : 1.2
            })
        }
      });
  
      skills.forEach((skill, index) => {
        if (index === 0) {
          // 첫 번째 스킬(HTML)은 아래로 사라지기만 함
          tl.to(skillRef.current, {
            duration: 1,
            y: 40,
            opacity: 0,
            ease: "power1.out",
          });
        }
        
        tl.to(skillRef.current, {
          duration: 0,  
          y: -40,
          opacity: 0,
          textContent: skills[(index + 1) % skills.length],
        })
        .to(skillRef.current, {
          duration: 0.5,
          y: 0,
          opacity: 1,
          ease: "power1.out",
        })
        .to(skillRef.current, {
          duration: 0.5,
          y: 40,
          opacity: 0,
          ease: "power1.out",
          delay: 0.5  // 텍스트가 보이는 시간을 좀 더 길게
        });
      });
    }, []);

  return (
    <div ref={loadingRef} className="loading fixed z-10">
    <div className='loading-skills absolute top-0 left-0 w-screen h-screen flex flex-col justify-center items-center align-center z-10 bg-white text-gray90'>
    <div className="skill flex text-5xl justify-center items-center">
      WEB
      <div className='flex justify-center items-center skill-container ml-[259px] w-[347px] h-[141px] border-[3px] rounded-2xl'>
        <span ref={skillRef}>{skills[0]}</span>
      </div>
    </div>
    </div>
    <div ref={logoRef} className="logo-container bg-white text-gray90 absolute top-0 left-[-5000px] w-screen h-screen flex justify-center items-center align-center text-9xl font-title z-20">
      <h1 className=''>PORTFOLIO</h1>
    </div>
  </div>
  )
}

export default Loading