import Image from "next/image";
import { Blogs } from "@/lib/data-dummy"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function NewMarketing() {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-4 w-full bg-neutral-white">
                <div className="flex flex-col w-[1110px] items-center gap-2 text-center">
                    <span className="text-neutral-d-grey text-[36px] leading-[44px] font-semibold">
                        Caring is the new marketing
                    </span>
                    <span className="text-neutral-grey w-[628px]">
                        The Nexcent blog is the best place to read about the latest membership insights, trends and more. 
                        See who's joining the community, read about how our community are increasing their membership income and lot's more.​
                    </span>
                </div>

                <div className="flex items-center justify-between px-[144px] w-full mt-1">
                    { Blogs.map((blog) => (
                        <div key={blog.id} className="relative flex flex-col items-center">
                            <Image
                                src={blog.image}
                                width={368}
                                height={286}
                                alt="Blog Image"
                                className="rounded-[8px] object-cover"
                            />

                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 flex flex-col justify-center items-center text-center bg-neutral-white gap-4 p-4 rounded-[8px] shadow-[0px_8px_16px_0px_#ABBED166] w-[317px]">
                                <span className="text-neutral-grey text-xl font-semibold">{blog.title}</span>
                                <Button className="text-brand-primary text-xl font-semibold" variant="standardTertiary" size="clear" asChild>
                                    <Link href={blog.href}>Read More <ArrowRight/></Link>
                                </Button>
                            </div>
                        </div>
                    )) }
                    
                </div>
            </div>
        </>
    )
}