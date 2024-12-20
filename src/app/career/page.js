import Image from 'next/image'
import React from 'react'
import careerImg from "@/assets/images/career-img.png"
// import companyShape from "@/assets/images/company-shape.svg"

const Career = () => {
  return (
    <section className='py-[96px]'>
      <div className='container mx-auto relative text-center'>
        {/* <Image src={companyShape} alt='shape-img' className='absolute right-0'/> */}
        <div className='w-[624px] mx-auto'>
          <strong className='font-[500] text-[14px] leading-[20px] mb-[24px]'>CAREER AT FINSWEET</strong>
          <h2 className='font-[600] text-[48px] leading-[58px] mb-[24px]'>We hired people who are Always Passionate about what they do</h2>
          <p className='font-[400] text-[16px] leading-[24px] mb-[64px]'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw .</p>
        </div>
        <Image src={careerImg} alt='career-img' className='mx-auto mb-[80px]'/>
        <p className='font-[500] text-[18px] leading-[28px] mb-[136px]'>See Our open positions </p>
      </div>
    </section>
  )
}

export default Career