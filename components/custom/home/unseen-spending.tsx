import Image from "next/image";

export default function UnseenSpending() {
    return (
        <>
            <div className="flex justify-between items-center px-[144px] w-full">
                <div className="flex items-center justify-center">
                    <Image
                        src="/illustrations/illustration-2.png"
                        width={442}
                        height={329}
                        alt="Illustration"
                    />
                </div>

                <div className="flex flex-col items-start justify-center gap-8 max-w-[661px]">
                    <div className="flex flex-col items-start gap-4">
                        <span className="text-neutral-d-grey text-[36px] leading-[44px] font-semibold">The unseen of spending three years at Pixelgrade</span>
                        <span className="text-neutral-grey text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. 
                            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. 
                            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                        </span>
                    </div>

                    <button className="bg-brand-primary text-neutral-white rounded-[4px] py-[14px] px-8">Learn More</button>
                </div>
            </div>
        </>
    )
}