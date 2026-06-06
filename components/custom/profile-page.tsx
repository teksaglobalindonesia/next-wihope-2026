'use client';

import { useAuthStore } from "@/stores/use-auth-store";
import { useEffect, useState } from "react";

export default function ProfilePage() {
    const { name, isLoggedin } = useAuthStore();

    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    if (!isLoggedin) {
        return (
            <div className="w-full mt-[120px] text-center font-semibold text-red-500">
                Silakan login terlebih dahulu.
            </div>
        );
    }
    
return (
    <div className="w-full max-w-7xl h-auto mx-auto my-[84px] mb-[355px] py-6 gap-10 font-inter">   
        <div className="h-[88px] px-[144px] gap-24">
            <div className="flex flex-col justify-center  w-[661px] h-[88px] gap-2 pr-16">
                <h1 className="text-4xl font-semibold text-[#4D4D4D] leading-[44px] ">
                Welcome,
            <span className="block">
            {name}
            </span>
            </h1>
            </div>
        </div>
    </div>
)
}