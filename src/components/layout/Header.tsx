import Link from "next/link";
import menuData from "./menuData";
import React, { useEffect } from "react";
import { Menu, X } from "lucide-react";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { useSession } from "next-auth/react";
import { useSignInModal } from "./sign-in-modal";
import { motion } from "framer-motion";
import { FADE_IN_ANIMATION_SETTINGS } from "@/utils/motion";
import { useRouter } from "next/router";
import clsx from "clsx"
import Image from "next/image";


export default function Header() {
  const { pathname } = useRouter()
  const [isHome, setIsHome] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)


  useEffect(() => {
    if (isHome) {
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
    }
  }, [isHome])

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])


  // Sign In Modal
  const { data: session, status } = useSession();
  const { SignInModal, setShowSignInModal } = useSignInModal();

  return (
    <>
      <SignInModal />
      <div className={clsx("sticky top-0 inset-x-0 z-50 group w-full", {
        "!fixed": isHome,
      })}>
        <header
          className={clsx(
            "relative h-24 px-8 mx-auto transition-colors bg-transparent border-b border-transparent duration-200 group-hover:bg-transparent !bg-opacity-50 group-hover:border-0",
            {
              "!bg-transparent !bg-opacity-50 !border-0": !isHome || isScrolled,
            }
          )}
        >
          <div className="relative h-full flex items-center justify-between">
            <div className="lg:ml-16 xl:mr-12">
              <div className="relative h-28 w-28 lg:h-32 lg:w-32">
                <Link href="/">
                  <Image src="/images/brand/logo-text.svg" alt="liuco logo" fill className="object-scale-down" />
                </Link>
              </div>
            </div>

            <div className="flex justify p-0 m-0 lg:pr-0 items-center lg:ml-16 xl:mr-12">
              <Link href={'/signin'} className={'font-satoshiL text-white rounded-3xl bg-red border-2 border-red px-7 py-3 hover:bg-black duration-200'}>
                <div className="flex items-center relative">
                  Get Started
                  <div className="relative h-5 w-5 ml-1 items-center justify-center">
                    <Image src={'/icons/arrow-up-right.svg'} alt="arrow up right" fill></Image>
                  </div>
                </div>
              </Link>
            </div>


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
      </div>
    </>
  );
}
