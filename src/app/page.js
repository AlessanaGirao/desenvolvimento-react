'use client'
import Appbar from './components/Appbar';
import Bottom from './components/Bottom';
import Drawer from './components/Drawer';
import React, {useState} from 'react';
import { useRouter } from "next/navigation";
import Title from './components/Title';



export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState();
  const router = useRouter();

  const handleMenuToggle  = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <main className="min-h-screen">
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
        <div className='flex flex-col items-center'>
          <Title>Bem-vindo ao Portfólio de Fotografia📸</Title>
            <p className='bg-white w-[1000px] pt-10 p-6 rounded-lg shadow-lg font-mono text-center text-base md:text-lg lg:text-xl py-6'>
                Cada imagem conta uma história, captura um momento fugaz e revela a beleza do mundo à nossa volta. Este é o meu espaço para compartilhar essa jornada visual com você.
                Em cada foto, busco encontrar a essência, a luz, as cores e as emoções que tornam cada momento único. Das paisagens impressionantes à expressão humana mais delicada, cada clique é uma oportunidade de explorar o extraordinário no cotidiano.
                Seja bem-vindo a este mundo de imagens. Espero que encontre inspiração, beleza e uma apreciação renovada pela arte da fotografia.
            </p>
        </div>
      <Bottom></Bottom>
    </main>
  )
}