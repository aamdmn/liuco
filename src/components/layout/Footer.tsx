import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="w-full h-[87vh] flex text-white overflow-hidden">
      <div className="w-full lg:w-[92%] bg-black h-full m-0 p-0 flex flex-col md:flex-row">
        <div className="grid w-full md:text-lg grid-rows-1 gap-28 grid-cols-2 md:grid-cols-1 mt-28 mb-16 mx-auto items-center ">
          <div className="md:justify-self-center justify-self-center md:w-28">
            <Link href={''} className='hover:text-red duration-150 mb-2'>Sign In</Link>
            <p>info@liuco.com</p>
          </div>
          <div className="flex flex-col justify-self-center text-left md:w-28">
            <Link href={''} className="hover:text-coolGray duration-150 mb-2">Twitter</Link>
            <Link href={''} className="hover:text-coolGray duration-150 mb-2">Instagram</Link>
            <Link href={''} className="hover:text-coolGray duration-150 mb-2">Linkedln</Link>
          </div>
          <div className="justify-self-center text-left md:justify-self-center md:w-28 ">
            <p>© {new Date().getFullYear()} Liuco</p>
          </div>
        </div>
        <div className="relative flex flex-col w-full h-full overflow-hidden order-last md:order-first">
          <Link href={'/signin'} className={'w-[18.5rem] h-[15rem] bottom-1 absolute'}>
            <div className="absolute h-full w-[20%] top">
              <div className="relative h-12 md:h-20 lg:w-20 inset-y-[2rem] inset-x-[8rem] lg:inset-y-[3rem] lg:inset-x-[12rem]">
                <Image src={'/icons/arrow-up-right.svg'} alt='arrow' fill className="object-fill" />
              </div>
              <h1 className="text-5xl lg:text-7xl absolute bottom-16 md:bottom-10 ml-5 md:ml-10">Get <br /> Started</h1>
            </div>
            <div className="relative inset-y-[-2rem] inset-x-[-3.5rem] md:inset-y-[-5rem] md:inset-x-[-5rem] opacity-20 hover:opacity-100 duration-300 z-[100]">
              <div className="relative h-[22rem] w-[22rem] md:w-[33rem] md:h-[33rem]">
                <Image src={'/images/large-circle.svg'} alt='elipse' fill className="object-fill animate-spin-slow" />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="text-black hidden w-[8%] lg:flex relative justify-center items-end">
        <motion.div whileHover={{
          opacity: 0.5,
          transition: {
            duration: 0.15,
            ease: 'easeInOut',
          },
        }}
          onClick={scrollToTop}
          className="relative h-14 w-14 mb-24 cursor-pointer">
          <Image src={"/icons/arrow-up.svg"} alt="arrow up" fill className="object-fill" />
        </motion.div>
      </div>
    </footer >
  );
}
