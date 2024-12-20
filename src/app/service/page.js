import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
// import ImgShapes from "@/assets/images/shapes-btn.svg"
import Image from 'next/image';
import Link from 'next/link';
const About = () => {
  return (
    <section className='bg-[#FFE6D2] py-[96px]'>
      <div className='container mx-auto justify-between flex items-center gap-[250px]'>
      <div className="w-[624px]">
        <strong className='font-[500] text-[14px] leading-[20px] uppercase'>Our Services</strong>
          <h1 className="font-[600] text-[56px] leading-[68px] ">We Build Software Solutionthat Solve Clients Business Challenges</h1>
          <p className="font-[400] text-[16px] leading-[24px] text-[#A7A8AF] mt-[24px] mb-[24px]">Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.</p>
            {/* <Image src={ImgShapes} className="absolute" alt="btn-img"/> */}
            <button className="w-[180px] bg-[#444CFC] py-[10px] flex items-center gap-1 justify-center text-white">
              Request Quote
              <HiArrowLongRight/>
            </button>
        </div>
        <ul>
        <li className='flex flex-col gap-1'>
                <Link className='font-[600] text-[24px] leading-[36px]' href={"#"}>Technical support</Link>
                <Link className='font-[600] text-[24px] leading-[36px]' href={"#"}>Testing</Link>
                <Link className='font-[600] text-[24px] leading-[36px]' href={"#"}>Development </Link>
                <Link className='font-[600] text-[24px] leading-[36px]' href={"#"}>AWS/Azure </Link>
                <Link className='font-[600] text-[24px] leading-[36px]' href={"#"}>Consulting</Link>
            </li>
        </ul>
      </div>
    </section>
  )
}

export default About