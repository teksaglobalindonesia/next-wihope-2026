'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/stores/use-auth-store'

export default function Login() {
  const [name, setNameInput] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const setName = useAuthStore(
    (state: any) => state.setName
  )

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault()
    setName(name)
    router.push('/profile')
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex w-[450px] flex-col gap-4 rounded-xl border bg-white p-8 shadow-lg"
      >
        <h1 className="text-center text-3xl font-semibold">
          Login
        </h1>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) =>
            setNameInput(e.target.value)
          }
          className="rounded border border-neutral-d-grey p-3"
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="rounded border border-neutral-d-grey p-3"
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="rounded border border-neutral-d-grey p-3"
        />

        <button
          type="submit"
          className="rounded-[6px] px-[20px] py-[10px] bg-brand-primary  text-white"
        >
          Submit
        </button>
      </form>
    </div>
  )
}