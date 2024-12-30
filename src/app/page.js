import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="container w-screen h-screen flex flex-col justify-center items-center align-center">
      <div className="skill flex gap-4 text-4xl">
        WEB
        <div className='skill-container'>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
        </div>
      </div>
      <div className="logo">
        <h1>PORTFOLIO</h1>
      </div>
      <div className="goto">
        <Link href='/main'>
          VISIT WEBSITE
        </Link>
      </div>
      <div className="bottom">
        <div className="name">KIM MI-SEON</div>
        <div className="position">Front-End Developer</div>
        <div className="years">2025</div>
      </div>
    </div>
  );
}
