import Link from "next/link";
import React, { useEffect } from "react";

import { useState } from "react";

import { useSession } from "next-auth/react";
import { useSignInModal } from "./sign-in-modal";
import { motion } from "framer-motion";
import { FADE_IN_ANIMATION_SETTINGS } from "@/utils/motion";
import clsx from "clsx"
import Image from "next/image";
import Logo from "../graphics/Logo";


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)


  useEffect(() => {

    const detectScrollY = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", detectScrollY)

    return () => {
      window.removeEventListener("scroll", detectScrollY)
    }

  })


  // Sign In Modal
  const { data: session, status } = useSession();
  const { SignInModal, setShowSignInModal } = useSignInModal();

  return (
    <>
      {/* <SignInModal /> */}
      <div className={clsx("fixed top-0 inset-x-0 z-50 group w-full")}>
        <header
          className={clsx(
            "relative bg-transparent"
          )}
        >
          <div className="relative flex h-full items-center justify-between p-7 md:py-10 md:px-20">
            <div>
              <Link href={"/"} className="flex justify-center items-center">
                <div className="bg-red p-3 rounded-xl">
                  <Logo />
                </div>
                <h1 className="text-red text-2xl font-satoshiM ml-2">Liuco</h1>
              </Link>
            </div>

            <Link href={'/signin'} className={'font-satoshiL text-white rounded-3xl bg-red border-2 border-red px-7 py-3 hover:bg-black duration-200'}>
              <div className="flex items-center relative">
                Get Started
                <div className="relative h-5 w-5 ml-1 items-center justify-center">
                  <Image src={'/icons/arrow-up-right.svg'} alt="arrow up right" fill></Image>
                </div>
              </div>
            </Link>


            {/* TODO: kod na prihlasenie */}
            {/* <div className="flex items-center justify-between px-4">
              <div className="flex justify-end pr-16 lg:pr-0 items-center">
                <AnimatePresence>
                  {!session && status !== "loading" ? (
                    <motion.button
                      className="w-32 rounded-full border border-black bg-black dark:bg-white p-1.5 px-4 mx-6 text-sm text-white dark:text-black transition-all hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white dark:hover:border-white"
                      onClick={() => setShowSignInModal(true)}
                      {...FADE_IN_ANIMATION_SETTINGS}
                    >
                      Sign In With Google
                    </motion.button>
                  ) : (
                    <UserDropdown />
                  )}
                </AnimatePresence>
                </div>
              </div> */}
          </div>
        </header>
      </div >
    </>
  );
}
