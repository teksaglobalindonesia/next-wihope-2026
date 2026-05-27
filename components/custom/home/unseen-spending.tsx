import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function UnseenSpending() {
    return (
        <>
            <div className="flex justify-between items-center px-[144px] w-full">
                <div className="flex items-center justify-center">
                    <Image
                        src="/illustrations/mobile-login-illustration.png"
                        width={442}
                        height={329}
                        alt="Illustration"
                    />
                </div>

                <div className="flex flex-col items-start justify-center gap-8 w-[661px]">
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="text-neutral-d-grey text-[36px] leading-[44px] font-semibold">The unseen of spending three years at Pixelgrade</h2>
                        <p className="text-neutral-grey text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. 
                            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. 
                            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                        </p>
                    </div>

                    <Button className="" variant="standardPrimary" size="medium" asChild>
                        <Link href="/register">Learn More</Link>
                   </Button>
                </div>
            </div>
        </>
    )
}