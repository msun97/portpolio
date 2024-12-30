import Inform from '@/components/Inform'
import Line from '@/components/Line'
import Link from 'next/link'
import React from 'react'

const IntroSection = () => {
  return (
    <>
    <div className="line-container">
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
    </div>
    <div className="name">
      김미선 KIM MI-SEON
    </div>
    <div className="fig"></div>
    <div className="contact">
      <div className="birthday">1997. 03. 27</div>
      <Link href="tel:01029480052">Phone. +82 010.2948.0052</Link>
      <Link href="mailto:kimmi.seon@gmail.com">Email. miseong827@gmail.com</Link>
    </div>
    <div className="inrtoduce">
      <Inform title='INTERSET' content='프론트엔드, 애니메이션 구현, 상태 관리' />
      <Inform title='CHARACTER' content='창의적, 목표지향적, 계획적, 호기심, 긍정적, 묵묵함' />
      <Inform title='TOOLS' content='HTML, CSS, JavaScript, React, Next.js, Redux, GSAP, Three.js' />
      <Inform title='EDUCATION' content='2016 대구구암고등학교 졸업 2021 금오공과대학교 기계공학과 졸업 2023 금오공과대학교 대학원 기계공학과 졸업 2025 이젠아카데미 UI/UX 프론트엔드 과정 수료' />
      <Inform title='EXPERIENCE' content='2023 - 2024 Knotz 주식회사 선임연구원' />    
    </div>
    </>
  )
}

export default IntroSection