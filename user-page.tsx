"use client";

import { useAuthStore } from "@/stores/use-auth-store";

type AuthStore = {
  name?: string;
};

export default function UserPage() {
  const { name } = useAuthStore() as AuthStore;

  return (
    <section className="w-full min-h-[1000px]">
      <div className="w-full max-w-[1440px] h-[136px] pt-6 pb-6">
        <div className="h-[88px] flex items-center">
          <div className="w-[601px] h-[88px] flex flex-col">
            <h1
              className="text-[36px] leading-[44px] font-semibold text-[#263238] m-0 p-0"
              style={{ fontFamily: "Inter, sans-serif", letterSpacing: 0 }}
            >
              Welcome,
              <br />
              {name}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}