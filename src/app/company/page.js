import Image from 'next/image'
import React from 'react'
// import companyShape from "@/assets/images/company-shape.svg"
import company1 from "@/assets/images/company1.png"
import company2 from "@/assets/images/company2.png"
import company3 from "@/assets/images/company3.png"
const Company = () => {
  return (
    <section className='py-[120px]'>
      <div className='container mx-auto relative'> 
        {/* <Image src={companyShape} className='absolute right-0' alt='company-shape'/> */}
        <div className='w-[700px]'>
          <strong className='font-[500] text-[14px] leading-[20px] uppercase mb-[20px]'>Company</strong>
          <h2 className="font-[600] text-[48px] leading-[58px] mb-[24px]">Award-winning Company seen and used by millions around the world.</h2>
          <p className='font-[400] text-[16px] leading-[24px] mb-[64px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. </p>
        </div>
        <div className='flex items-center justify-between gap-[12px]'>
          <Image src={company1} alt='company-img'/>
          <Image src={company2} alt='company-img'/>
          <Image src={company3} alt='company-img'/>
        </div>
      </div>
    </section>
  )
}

export default Company