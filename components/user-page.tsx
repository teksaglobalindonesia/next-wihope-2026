"use client";

import { useAuthStore } from "@/stores/use-auth-store";

type AuthStore = {
  name?: string;
};

export default function UserPage() {
  const { name } = useAuthStore() as AuthStore;

  return (
    <section className="w-full min-h-[588px]">
      <div className="w-full mx-auto max-w-[1440px] h-[136px] pt-6 pb-6 px-[120px]">
        <div className="h-[88px] flex items-center">
          <div className="w-[661px] h-[88px] flex flex-col gap-4">
            <div className="w-[601px] h-[88px] flex flex-col gap-4">
              <h1
                className="font-inter text-[36px] leading-[44px] font-semibold text-neutral-d-grey"
              >
                Welcome,
                <br />
                {name}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}