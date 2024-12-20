import Image from "next/image";
import image from '../assets/images/hero1img.png'
import img1 from '../assets/images/Group 1710.png'
import img2 from '../assets/images/Group 1711.png'
import image1 from '../assets/images/Logo1.png'
import image2 from '../assets/images/Logo2.png'
import image3 from '../assets/images/Logo3.png'
import image4 from '../assets/images/Logo4.png'
import image5 from '../assets/images/Log5.png'
import { HiArrowLongRight } from "react-icons/hi2";

export default function Home() {
  return (
    <div className="pt-[96px] bg-[#232536] px-[160px] mb-[32px]">
      <div className="flex justify-between items-center container mx-auto">
        <div>
          <div className="w-[24px] h-[24px] bg-[#FFFFFF0F] mb-[24px]"></div>
          <h1 className="text-[56px] leading-[68px] font-semibold w-[624px] text-white mb-[24px]">Transform Your Idea Into Reality with Finsweet</h1>
          <p className="text-[16px] leading-[24px] font-normal w-[470px] text-white mb-[32px] opacity-60">The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.</p>
          <button className="bg-[#444CFC] py-[20px] px-[32px] flex items-center gap-[16px] text-white bg-hero bg-no-repeat">
            Request Quote
            <HiArrowLongRight className='w-[20px]' />
          </button>
        </div>
        <div className="flex">
          <Image className="w-[17px] h-[102px] mt-[530px]" src={img1} alt="image" width={17} height={102} />
          <Image className="w-[523px] h-[632px]" src={image} alt="image" width={523} height={632} />
          <Image className="w-[20px] h-[222]" src={img2} alt="image" width={20} height={222} />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[14px] font-[500] leading-[20px] text-white opacity-60">Our Clients</p>
          <p className="text-[18px] font-[500] leading-[28px] text-white ">We've Worked with</p>
        </div>
          <Image className="w-[187px] h-[105px]" src={image1} alt="image" width={187} height={105} />
          <Image className="w-[187px] h-[105px]" src={image2} alt="image" width={187} height={105} />
          <Image className="w-[187px] h-[105px]" src={image3} alt="image" width={187} height={105} />
          <Image className="w-[187px] h-[105px]" src={image4} alt="image" width={187} height={105} />
          <Image className="w-[187px] h-[105px]" src={image5} alt="image" width={187} height={105} />
      </div>
    </div>

  );
}
