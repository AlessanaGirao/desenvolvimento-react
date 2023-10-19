"use client"
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Appbar from "@/app/components/Appbar";
import React from "react";
import Title from "@/app/components/Title";
import Layout from "@/app/components/Layout";
import Drawer from "@/app/components/Drawer";
import { useState } from 'react';
import Bottom from '@/app/components/Bottom';


const About = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }

  return (
    <div>
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
      <Layout>
        <Breadcrumbs></Breadcrumbs>
        <div className='flex flex-col items-center'>
          <Title>Sobre nós🖼️🌷</Title>
          <p className='bg-white w-[1000px] pt-10 p-6 rounded-lg shadow-lg font-mono text-center text-base md:text-lg lg:text-xl py-6'>
            Bem-vindo ao nosso espaço de descoberta visual, onde a fotografia ganha vida e a beleza do mundo se torna eterna através das lentes das nossas câmeras. Somos um coletivo de apaixonados por fotografia, unidos pela crença de que cada imagem conta uma história única e poderosa.
            Junte-se a nós nesta jornada visual. Explore nossas galerias, descubra novos horizontes e permita-se ser transportado para lugares distantes e momentos mágicos. Se você gostaria de colaborar, compartilhar suas histórias ou simplesmente se conectar, estamos aqui para ouvir.
          </p>
        </div>
        <Bottom></Bottom>
      </Layout>
    </div>
  )
}

export default About;