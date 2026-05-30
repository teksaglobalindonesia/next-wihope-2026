"use client"

import { useAuthStore } from '@/stores/use-auth-store';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginForm() {
  const {setUser} = useAuthStore();
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setUser({
      name: formData.name,
      email: formData.email
    });

    router.push('/profile');
  }
    
  return (
    <>
    <div className="bg-neutral-white w-fit mx-auto mt-10">
      <div className="flex flex-col justify-center items-center rounded-lg shadow-md overflow-hidden">

        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-brand-primary to-shade-3 w-full h-auto p-4 gap-2">
          <h1 className="text-neutral-white text-2xl font-bold">Login</h1>
          <h2 className="text-neutral-white">Fill out the form to login.</h2>
        </div>

        <form className="flex flex-col gap-6 p-6" onSubmit={handleSubmit}>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="name" className="text-neutral-grey text-sm">Enter your name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              required 
              placeholder="Your Name..."
              value={formData.name} 
              onChange={handleChange} 
              className='border border-neutral-d-grey rounded-[6px] h-[38px] w-[400px] px-2 text-sm text-neutral-d-grey placeholder:text-sm'
            />
          </div>

          <div className="flex flex-col items-start gap-2">
            <label htmlFor="email" className="text-neutral-grey text-sm">Enter your email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              required 
              placeholder="youremail@email.com"
              value={formData.email} 
              onChange={handleChange} 
              className='border border-neutral-d-grey rounded-[6px] h-[38px] w-[400px] px-2 text-sm text-neutral-d-grey placeholder:text-sm'
            />
          </div>

          <button
            type="submit"
            className="rounded-[6px] px-5 py-[10px] mt-4 bg-brand-primary transition duration-200 text-neutral-white focus:border-2 focus:border-neutral-d-grey active:bg-shade-2 disabled:bg-neutral-silver disabled:text-neutral-grey-blue"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
      
    </>
  );
}
