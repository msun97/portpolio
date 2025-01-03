
import Info from '@/components/Info';
import Nav from '@/components/Nav';
import ProjectList from '@/components/project/ProjectList';
import SkillList from '@/components/project/SkillList';
import ThreeObject from '@/components/ThreeObject';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className='wrap text-gray10 font-pretendard400'>
      <div className="loading hidden">
        <div className='loading-skills absolute top-0 left-0 w-screen h-screen flex flex-col justify-center items-center align-center z-10 bg-white text-gray90'>
        <div className="skill flex text-5xl justify-center items-center">
          WEB
          <div className='flex justify-center items-center skill-container ml-[259px] w-[347px] h-[141px] border-[3px] rounded-2xl'>
            <span>HTML</span>
            <span className='hidden'>CSS</span>
            <span className='hidden'>JavaScript</span>
            <span className='hidden'>React</span>
          </div>
        </div>
        </div>
        <div className="logo-container absolute top-0 left-0 w-screen h-screen bg-gray90 flex justify-center items-center align-center text-9xl font-title z-20">
          <h1>PORTFOLIO</h1>
        </div>
      </div>
      <Nav />
      <div className='main-container w-screen px-40'>
        <section className='about h-screen'>
          <div className='about-wrapper flex mt-[110px] gap-[110px]'>
            <div className='img-container  w-[320px] h-[450px]'>
              <img src="images/profile.jpg" alt="profile" width={320} height={450} className='w-[320px] h-[450px]' />
            </div>
            <div className='info-container'>
              <Info />
            </div>
          </div>
          <div className="flex logo-container text-9xl font-title z-20 mt-[110px] justify-end">
            <h1>PORTFOLIO</h1>
          </div>
        </section>
        <section className='project h-screen w-[1600px] flex'>
          <div className='projectInfo-container border-r  w-[320px]'>
            <div className='projectTitle mt-[120px] border-t h-fit border-b py-[32px] px-[16px] text-[24px]'>
              <ul className='flex flex-col gap-[24px]'>
                <ProjectList name='CLIO Cosmetic 개편' />
                <ProjectList iconClassName='invisible' className='opacity-50' name='반려인 커뮤니티 앱 ' />
                <ProjectList iconClassName='invisible' className='opacity-50' name='영화/드라마 OTT 웹/앱' />
              </ul>
            </div>
            <div className='flex flex-col gap-[20px] projectSkill mt-[32px] text-[20px]'>
              SKILLS
              <ul className='flex gap-[16px] text-[14px]'>
                <SkillList skill='React'/>
                <li>GSAP</li>
                <li>TailWind CSS</li>
              </ul>
            </div>
          </div>
          <div className='video-container w-[1280px] border-t mt-[120px]'>
            <video autoPlay loop muted>
              <source src="/videos/project.mp4" type="video/mp4" />
            </video>
          </div>

        </section>
        <section className='contact'>
          <div className='contactTitle'>CONTACT ME</div>
          <div className='object3D'>
            {/* <ThreeObject/> */}
          </div>
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
    </div>
  );
}
