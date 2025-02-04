'use client';

import Info from '@/components/Info';
import Loading from '@/components/Loading';
import Nav from '@/components/Nav';
import ProjectList from '@/components/project/ProjectList';
import SkillList from '@/components/project/SkillList';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

export default function Home() {
  const imgRef = useRef();

  return (
    <div className="wrap text-gray10 font-pretendard400 w-screen h-screen max-h-[860px] ">
      <Loading />
      <Nav />
      <div className="main-container w-screen px-40">
        <section className="about h-screen">
          <div className="about-wrapper flex mt-[110px] gap-[110px]">
            <div
              ref={imgRef}
              className="img-container  w-[320px] h-[450px] translate-y-[-500px]"
            >
              <Image
                src="images/profile.jpg"
                alt="profile"
                width={320}
                height={450}
                className="w-[320px] h-[450px]"
              />
            </div>
            <div className="info-container">
              <Info />
            </div>
          </div>
          <div className="flex logo-container text-9xl font-title z-20 mt-[110px] justify-end">
            <h1>PORTFOLIO</h1>
          </div>
        </section>
        <section className="project h-screen w-[1600px] flex">
          <div className="projectInfo-container border-r  w-[320px]">
            <div className="projectTitle mt-[120px] border-t h-fit border-b py-[32px] px-[16px] text-[24px]">
              <ul className="flex flex-col gap-[24px]">
                <ProjectList name="CLIO Cosmetic 개편" />
                <ProjectList
                  iconClassName="invisible"
                  className="opacity-50"
                  name="반려인 커뮤니티 앱 "
                />
                <ProjectList
                  iconClassName="invisible"
                  className="opacity-50"
                  name="영화/드라마 OTT 웹/앱"
                />
              </ul>
            </div>
            <div className="flex flex-col gap-[20px] projectSkill mt-[32px] text-[20px]">
              SKILLS
              <ul className="flex gap-[16px] text-[14px]">
                <SkillList skill="React" />
                <SkillList skill="GSAP" />
              </ul>
            </div>
          </div>
          <div className="video-container w-[1280px] border-t mt-[120px]">
            {/* <video autoPlay loop muted>
              <source src="/videos/project.mp4" type="video/mp4" />
            </video> */}
          </div>
        </section>
        <section className="contact w-screen h-screen">
          <div className="contactTitle font-title w-[737px] text-[128px]">
            CONTACT ME
          </div>
          <div className="object3D">{/* <ThreeObject/> */}</div>
          <div className="contactData mt-[60px] flex flex-col gap-[24px] text-[40px]">
            <Link href="tel:01029480052" className="flex gap-8">
              <span>H.P </span>
              <span>010-2948-0052</span>
            </Link>
            <Link href="mailto:miseong827@gmail.com" className="flex gap-5">
              <span>MAIL </span>
              <span>miseong827@gmail.com</span>
            </Link>
          </div>
        </section>
      </div>
      <footer className="w-screen text-[20px] flex mt-[210px] mb-[80px] px-[160px] justify-between">
        <div className="name">KIM MISEON</div>
        <div className="job">Front-End Engineer</div>
        <div className="years">2025</div>
      </footer>
    </div>
  );
}
