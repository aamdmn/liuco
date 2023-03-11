import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { text } from "node:stream/consumers";

interface Props {
    textColor?: string;
}

export default function GetStartedButton({ textColor }: Props) {

    return (
        <div className="w-fit">
            <Link href={'/signin'} className={"flex items-center px-7 py-4 bg-red border-red border-2 rounded-3xl hover:bg-black duration-200 md:px-12"}>
                <span className="text-lg">Get Started</span>
                <ArrowUpRight />
            </Link>
        </div>
    )
}