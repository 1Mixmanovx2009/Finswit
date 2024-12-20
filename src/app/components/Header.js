import Image from 'next/image';
import Link from 'next/link';
import { HiArrowLongRight } from "react-icons/hi2";

export default function Header() {
  return (
    <div className=' py-[27px] px-[100px] bg-[#232536]'>
      <div className='flex justify-between container mx-auto'>
        <a href="/">
          <Image
            src="/SiteLogo.svg"
            alt="Rasm tavsifi"
            width={122}
            height={24.71}
          />
        </a>
        <nav>
          <ul className=' text-gray-300 flex gap-[33px]'>
            <li>
              <Link href="/" className='hover:text-white'>
                Home
              </Link>
            </li>
            <li>
              <Link href="/service" className='hover:text-white'>
                Service
              </Link>
            </li>
            <li>
              <Link href="/company" className='hover:text-white'>
                Company
              </Link>
            </li>
            <li>
              <Link href="/career" className='hover:text-white'>
                Career
              </Link>
            </li>
            <li>
              <Link href="/blog" className='hover:text-white'>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className='hover:text-white'>
                Contact us
              </Link>
            </li>
            <button className='text-[#FFD3AF] flex items-center justify-between'>
              Clone project
              <HiArrowLongRight className='w-[20px]' />
            </button>
          </ul>
        </nav>
      </div>
    </div>

  );
}
