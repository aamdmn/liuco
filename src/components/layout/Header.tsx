import Link from "next/link";
import menuData from "./menuData";
import React, { useEffect } from "react";
import { Menu, X } from "lucide-react";

import { useState } from "react";
import ThemeToggler from "../ThemeToggler";
import { AnimatePresence } from "framer-motion";

import { useSession } from "next-auth/react";
import { useSignInModal } from "./sign-in-modal";
import { motion } from "framer-motion";
import UserDropdown from "./UserDropdown";
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
      <div className={clsx("sticky top-0 inset-x-0 z-50 group", {
        "!fixed": isHome,
      })}>
        <header
          className={clsx(
            "relative h-24 px-8 mx-auto transition-colors bg-transparent border-b border-transparent duration-200 group-hover:bg-gray-500 !bg-opacity-10 group-hover:border-0",
            {
              "!bg-gray-500 !bg-opacity-10 !border-0": !isHome || isScrolled,
            }
          )}
        >
          <div className="container relative -mx-4 h-full flex w-full items-center justify-between">
            <div className="px-2 lg:ml-16 xl:mr-12">
              <Link href="/">
                <div className="relative h-32 w-32">
                  <Image src="/images/brand/logo-text.svg" alt="liuco logo" fill className="object-fill" />
                </div>
              </Link>
            </div>

            <div className="flex justify-end pr-16 lg:pr-0 items-center">
              <Link href={'/signin'} className={'font-satoshiL text-white rounded-3xl bg-red px-7 py-3'}>
                <div className="flex items-center relative">
                  Get Started
                  <div className="relative flex h-5 w-5 ml-1 items-center">
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
