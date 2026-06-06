'use client' ;

import { useAuthStore } from "@/stores/use-auth-store"
import { useState } from "react"
import { CustButton } from "./CustButton";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function Login () {
    const [name, setName] = useState("");
    const login = useAuthStore((state) => state.login);
    const router = useRouter ();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return;

        login(name);
        router.push("/profile")  
    }

    return(
        <div className="w-full max-w-7xl h-auto mx-auto mt-[84px] mb-[355px] gap-10 py-6 font-inter">
            <div className="w-full h-[197px]">
                <div className="px-[144px] gap-[96px]">
                    <div className="flex flex-col w-[661px] gap-4">
                        <h1 className="h-11 font-semibold text-4xl leading-[44px] text-[#4D4D4D]">Login</h1>
                        <p className="text-[#717171]">Enter Your Name</p>
                        <form onSubmit={handleSubmit}>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-[400px] border p-2 rounded-md border-gray-500"/>
                        </form>
                            <CustButton size={'medium'}>Submit</CustButton>
                    </div>
                </div>
            </div>
        </div>
    )
}