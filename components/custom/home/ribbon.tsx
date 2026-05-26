import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Ribbon() {
    return (
        <>
            <div className="flex flex-col justify-center items-center text-center gap-8 py-8 w-full bg-neutral-silver">
                <span className="text-neutral-black text-[64px] leading-[76px] font-semibold w-[887px]">Pellentesque suscipit fringilla libero eu.</span>
                <Button className="" variant="standardPrimary" size="medium" asChild>
                    <Link href="/register">Get a Demo <ArrowRight/></Link>
                </Button>

            </div>
        </>
    )
}