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
            <Link href={'/signin'} className={"flex items-center px-7 py-4 bg-red rounded-3xl"}>
                <span className="text-lg">Get Started</span>
                <ArrowUpRight />
            </Link>
        </div>
    )
}