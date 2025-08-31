'use client';
import { signIn } from 'next-auth/react';
export default function SignIn() {
  return (
    <div className="max-w-md mx-auto p-6 border rounded-2xl">
      <h2 className="text-xl font-semibold">Sign in</h2>
      <button onClick={()=>signIn('google')} className="block w-full py-2 mt-3 bg-white text-black rounded-2xl">Google</button>
      <button onClick={()=>signIn('azure-ad')} className="block w-full py-2 mt-3 bg-white text-black rounded-2xl">Microsoft</button>
    </div>
  );
}
