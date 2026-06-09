"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/use-auth-store";

type AuthStore = {
  name?: string;
  setName: (name: string) => void;
};

export default function LoginPage() {
  const [inputName, setInputName] = useState("");
  const router = useRouter();
  const { name, setName } = useAuthStore() as AuthStore;

  const handleSubmit = () => {
    if (!inputName) return;
    setName(inputName);
    router.push("/profile");
  };

  return (
    <section className="h-[560px] py-6">
      <div className="max-w-[1440px] mx-auto px-[120px]">
        {!name ? (
          <div className="w-[661px] flex flex-col gap-4">
            <h1 className="w-[601px] text-[36px] leading-[44px] font-semibold text-[#263238]">
              Login
            </h1>

            <p className="w-[601px] text-[14px] leading-[20px] font-normal text-[#717171]">
              Enter your name
            </p>

            <input
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              className="w-[400px] h-[45px] border border-[#263238] rounded-[6px] px-4 outline-none"
            />

            <button
              onClick={handleSubmit}
              className="w-[88px] h-[40px] rounded-[6px] bg-[#4CAF4F] text-white text-[14px] leading-[20px] font-medium"
            >
              Submit
            </button>
          </div>
        ) : (
          <div className="w-[661px]">
            <h1 className="text-[48px] leading-[56px] font-semibold text-[#263238]">
              Welcome,
              <br />
              {name}
            </h1>
          </div>
        )}
      </div>
    </section>
  );
}