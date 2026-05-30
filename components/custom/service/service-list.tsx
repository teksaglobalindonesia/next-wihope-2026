import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Services } from "@/lib/data-dummy"

export default function ServiceList() {
    return (
        <>
            <div className="flex flex-col justify-center items-center bg-neutral-white w-full gap-10">
                { Services.map((service) => (
                    service.id % 2 === 0 ? ( // Even ids
                        <div key={service.id} className="flex items-center justify-between bg-neutral-silver px-[144px] py-[74px] w-full">
                            <div className="flex flex-col gap-8 items-start w-[661px]">
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-neutral-d-grey text-[36px] leading-[44px] font-semibold">{service.title}</h3>
                                    <p className="text-neutral-grey text-sm">{service.description}</p>
                                </div>
                                
                                <Button variant="standardPrimary" size="medium" asChild>
                                    <Link href="/register">Learn More</Link>
                                </Button>
                            </div>

                            <div className="">
                                <Image
                                    src={service.image}
                                    width={368}
                                    height={286}
                                    alt="Service Image"
                                    className="rounded-[8px] object-cover"
                                />
                            </div>
                        </div>
                    ) : ( // Odd ids
                        <div key={service.id} className="flex items-center justify-between bg-neutral-white px-[144px] py-[74px] w-full">
                            <div className="">
                                <Image
                                    src={service.image}
                                    width={368}
                                    height={286}
                                    alt="Service Image"
                                    className="rounded-[8px] object-cover"
                                />
                            </div>

                            <div className="flex flex-col items-start gap-8 w-[661px]">
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-neutral-d-grey text-[36px] leading-[44px] font-semibold">{service.title}</h3>
                                    <p className="text-neutral-grey text-sm">{service.description}</p>
                                </div>
                                
                                <Button variant="standardPrimary" size="medium" asChild>
                                    <Link href="/register">Learn More</Link>
                                </Button>
                            </div>
                        </div>
                    )
                )) }
            </div>
        </>
    )
}