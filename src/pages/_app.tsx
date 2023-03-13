import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import { AnimatePresence, motion } from "framer-motion";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <AnimatePresence>
      <SessionProvider session={session}>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <Component {...pageProps} />
          <Analytics />
        </motion.div>
      </SessionProvider>
    </AnimatePresence>
  );
}
