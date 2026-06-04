'use client';

import { useAuthStore } from '@/stores/use-auth-store';

export default function LoginForm() {
  const { user } = useAuthStore();

  return (
    <>
      <div className="mx-auto mt-10 w-fit rounded-lg bg-neutral-white p-8 shadow-md">
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-[36px] font-semibold leading-[44px] text-neutral-d-grey">
            Welcome <span className="text-brand-primary">{user.name}</span>!
          </h2>

          <div className="flex flex-col items-start gap-2 text-sm font-medium text-neutral-grey">
            <h3 className="text-base font-semibold text-brand-primary">
              User Info:
            </h3>

            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>

              <p>Name: {user.name}</p>
            </div>

            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>

              <p>Email: {user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
