import Info from '@/components/Info';
import Nav from '@/components/Nav';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <>
      <div className="loading-container w-screen h-screen flex flex-col justify-center items-center align-center">
        <div className="skill flex gap-4 text-4xl">
          WEB
          <div className='skill-container'>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>
        <div className="logo-container">
          <h1>PORTFOLIO</h1>
        </div>
      </div>
      <Nav />
      <div className='main-container'>
        <section className='about'>
          <div className='img-container'>
            <img src="/images/profile.jpg" alt="profile" />
          </div>
          <div className='info-container'>
            <Info />
          </div>
        </section>
        <section className='project'>
          <div className='video-container'>
            <video autoPlay loop muted>
              <source src="/videos/project.mp4" type="video/mp4" />
            </video>
          </div>
          <div className='projectInfo-container'>
            <div className='projectTitle'>
              <ul>
                <li>CLIO Cosmetic 개편</li>
                <li>반려인 커뮤니티 앱 </li>
                <li>크리스마스를 기다리며</li>
              </ul>
            </div>
            <div className='projectSkill'>
              Skill
              <ul>
                <li>React</li>
                <li>GSAP</li>
                <li>TailWind CSS</li>
              </ul>
            </div>
          </div>
        </section>
        <section className='contact'>
          <div className='contactTitle'>CONTACT ME</div>
          <div className='object3D'></div>
          <div className='contactData'>
            <Link href="tel:01029480052">
                <span>H.P </span>
                <span>010-2948-0052</span>
            </Link>
            <Link href="mailto:miseong827@gmail.com">
                <span>MAIL </span>
                <span>miseong827@gmail.com</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
