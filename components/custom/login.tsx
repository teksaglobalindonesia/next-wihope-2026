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
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setNameInput(e.target.value)
          }
          className="rounded border p-3"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="rounded border p-3"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="rounded border p-3"
        />

        <button
          type="submit"
          className="rounded bg-brand-primary p-3 text-white"
        >
          Login
        </button>
      </form>
    </div>
  )
}