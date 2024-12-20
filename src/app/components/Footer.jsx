import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { HiArrowLongRight } from "react-icons/hi2";
import contactShape from "../../assets/images/icon-log.svg"
import { FaFacebook, FaTwitter, FaInstagram  } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
const Footer = () => {
  return (
    <footer className='pt-[50px]'>
      <div className='container mx-auto justify-between flex items-center gap-[200px] mb-[64px]'>
        <div className='w-[450px]'>
          <strong className='mb-[40px] inline-block text-[48px] font-[600] leading-[58px]'>Let's make something special</strong>
          <p className='mb-[28px] text-[24px] font-[600] leading-[36px]'>Let's talk! 🤙 </p>
          <div className='flex  flex-col gap-2 w-[120px]'>
            <a href='#'>020 7993 2905</a>
            <a href='#'>hi@finsweet.com</a>
            <hr/>
          </div>
            <p>DLF Cybercity, Bhubaneswar, India, &52050</p>
        </div>
        <div className='relative'>
          <ul className='flex items-start gap-[70px]'>
            <li className='flex flex-col gap-1'>
                <Link className='font-[600] text-[16px] leading-[28px] hover:text-[#444CFC] duration-300' href={"/"}>Home</Link>
                <Link className='font-[600] text-[16px] leading-[28px] hover:text-[#444CFC] duration-300' href={"/service"}>Service</Link>
                <Link className='font-[600] text-[16px] leading-[28px] hover:text-[#444CFC] duration-300' href={"/company"}>Company</Link>
                <Link className='font-[600] text-[16px] leading-[28px] hover:text-[#444CFC] duration-300' href={"/career"}>Career </Link>
                <Link className='font-[600] text-[16px] leading-[28px] hover:text-[#444CFC] duration-300' href={"/blog"}>Blog</Link>
            </li>
            <li className='flex flex-col gap-1'>
                <strong className='font-[600] text-[16px] leading-[28px]'>Service</strong>
                <Link className='font-[500] text-[14px] leading-[20px] hover:text-[#444CFC] duration-300' href={"#"}>Technical support</Link>
                <Link className='font-[500] text-[14px] leading-[20px] hover:text-[#444CFC] duration-300' href={"#"}>Testing</Link>
                <Link className='font-[500] text-[14px] leading-[20px] hover:text-[#444CFC] duration-300' href={"#"}>Development </Link>
                <Link className='font-[500] text-[14px] leading-[20px] hover:text-[#444CFC] duration-300' href={"#"}>AWS/Azure </Link>
                <Link className='font-[500] text-[14px] leading-[20px] hover:text-[#444CFC] duration-300' href={"#"}>Consulting</Link>
                <Link className='font-[500] text-[14px] leading-[20px] hover:text-[#444CFC] duration-300' href={"#"}>Information Technology</Link>
            </li>
            <li className='flex flex-col gap-1'>
                <strong className='font-[500] text-[16px] leading-[24px]'>Resourses</strong>
                <Link className='font-[500] text-[14px] leading-[20px] hover:text-[#444CFC] duration-300' href={"#"}>About Us</Link>
                <Link className='font-[500] text-[14px] leading-[20px] hover:text-[#444CFC] duration-300' href={"#"}>Testimonial</Link>
                <Link className='font-[500] text-[14px] leading-[20px] hover:text-[#444CFC] duration-300' href={"#"}>Privacy Policy</Link>
                <Link className='font-[500] text-[14px] leading-[20px] hover:text-[#444CFC] duration-300' href={"#"}>Terms of use </Link>
                <Link className='font-[500] text-[14px] leading-[20px] hover:text-[#444CFC] duration-300' href={"#"}>Blog</Link>
            </li>
          </ul>
          <button className='flex gap-2 items-center absolute right-[0px] top-[250px]'>
            <Image src={contactShape} alt='Shape-Img'/>
            Contact Us
            <HiArrowLongRight/>
          </button>
        </div>
      </div>
      <div className='py-[20px] bg-[#FFE6D2] '>
        <div className='container mx-[auto] flex items-center justify-center gap-[800px]'>
          <div className='flex items-center gap-[42px]'>
            {/* <Image src={IconLogo} alt='logo-img'/> */}
            <strong className='font-[500] text-[16px] leading-[24px]'>©2021 Finsweet</strong>
          </div>
          <div className='flex items-center gap-[25px]'>
              <FaFacebook/>
              <FaTwitter/>
              <FaInstagram/>
              <GrLinkedin/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer