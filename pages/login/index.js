'use client'
import Appbar from '@/app/components/Appbar';
import Bottom from '@/app/components/Bottom';
import Drawer from '@/app/components/Drawer';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React, {useState} from 'react';
import 'tailwindcss/tailwind.css'

const LoginPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState();

  const handleMenuToggle  = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const { data: session } = useSession();
  const router = useRouter();

  console.log(session);


  if (session) {
    return (
      <main className="min-h-screen">
        <Appbar onMenuToggle={handleMenuToggle}></Appbar>
        <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>

          
        <div className="flex flex-col items-center justify-center h-screen">
          <h2 className="text-2xl font-mono font-semibold mb-4">
            Logado como: {session.user.name}, e-mail: {session.user.email}
          </h2>
          <button
            className='bg-gray-800 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full mb-4'
            onClick={() => router.push("/profile/complete-profile")}
          >
            Complete seu perfil
          </button>
          <button
            className='bg-gray-800 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full'
            onClick={() => {
              signOut();
            }}
          >
            Sair
          </button>
        </div>
        <Bottom></Bottom>
      </main>
    );
  }
  return (
    <main className="min-h-screen">
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
      <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="min-h-screen flex flex-col items-center justify-center">
       <h2 className="text-2xl font-mono font-semibold">Você não está conectado!</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
      <button className="bg-gray-800 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full" onClick={() => signIn()}>
        Logar
      </button>
  </div>
</div>
        <div>
          <button className='bg-gray-800 hover-bg-purple-500 text-white font-bold py-2 px-4 rounded-full' onClick={() => signIn()}>
            Logar
          </button>
        </div>
      </div>
      <Bottom></Bottom>
    </main>
  );


}
export default LoginPage;