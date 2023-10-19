import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import Breadcrumbs from "@/app/components/Breadcrumbs";
import Layout from "@/app/components/Layout";
import Drawer from "@/app/components/Drawer";
import Appbar from "@/app/components/Appbar";

import Title from '@/app/components/Title';

const Albums = () => {
  const router = useRouter();
  const { userId } = router.query; 

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    if (userId) {
      
      axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
        .then((response) => {
          setAlbums(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [userId]);

  const handleOpenAlbum = (albumId) => {

    router.push(`/user/${userId}/${albumId}`);
  };

  return (
    <Layout>
      <Appbar />
      <Breadcrumbs />
      <div>
        <Title>Álbuns do Usuário</Title>
        {albums.map((album) => (
          <div className='text-center flex items-center justify-center h-screen'>
          <div className='bg-white w-[1000px] pt-10 p-6 rounded-lg shadow-lg font-mono text-center text-base md:text-lg lg:text-xl py-6 mx-auto' key={album.id}>
            <h2>{album.title}</h2>
            <button
              className="bg-gray-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded ring-2 ring-purple-500/50"
              onClick={() => handleOpenAlbum(album.id)}
            >
              Abrir Álbum
            </button>
            </div>
          </div>
        ))}
      </div>
      
    </Layout>
  );
};

export default Albums;

