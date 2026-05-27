import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ClientIcons } from "@/lib/data-dummy"

export default function Quote() {
    return (
        <>
            <div className="flex items-center justify-between bg-neutral-silver px-[144px] py-8 w-full">
                <div className="relative aspect-square w-[326px]">
                    <Image
                        src="/images/tesla.jpg"
                        fill
                        alt="Tesla"
                        className="rounded-[8px] object-cover shadow-[0px_8px_16px_0px_#ABBED166]"
                    />
                </div>
                
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-start gap-4 w-[748px]">
                        <p className="text-neutral-grey font-medium">
                            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. 
                            Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. 
                            Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, 
                            quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, 
                            vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. 
                            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                        </p>
                        <h3 className="text-brand-primary text-xl font-semibold">Tim Smith</h3>
                        <p className="text-neutral-grey">British Dragon Boat Racing Association</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-[41px]">
                            { ClientIcons.slice(0, 6).map((icon) => (
                                <Image
                                    key={icon.id}
                                    src={icon.src}
                                    width={48}
                                    height={48}
                                    alt={icon.alt}
                                />
                            )) }
                        </div>

                        <Button className="text-xl font-semibold" variant="standardTertiary" size="clear" asChild>
                            <Link href="/register">Meet all customers <ArrowRight/></Link>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}