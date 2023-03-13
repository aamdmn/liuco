import EmailForm from "@/components/common/EmailForm"
import Layout from "@/components/layout"
import { motion } from "framer-motion"

export default function Waitlist() {
    return (
        <Layout>
            <motion.main
                className="overflow-x-hidden h-screen flex flex-col justify-center items-center text-center"
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
                <div className="p-5">
                    <h1 className="text-5xl md:text-7xl font-satoshiM text-red">Coming Soon</h1>
                    <p className="text-lg max-w-lg mt-10">
                        We&apos;re putting the finishing touches.
                        Sign up below to be the first to know when we launch, and to receive exclusive early access to our tool.
                    </p>
                </div>

                <EmailForm />
            </motion.main>
        </Layout>
    )
}