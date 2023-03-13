import { ArrowUpRight } from "lucide-react";
import Link from "next/link";


export default function GetStartedButton() {

    return (
        <div className="w-fit">
            <Link href={'/waitlist'} className={"flex items-center px-7 py-4 bg-red border-red border-2 rounded-3xl hover:bg-black duration-200 md:px-12 text-white"}>
                <span className="text-lg">Get Started</span>
                <ArrowUpRight />
            </Link>
        </div>
    )
}