import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Drawer from "@/app/components/Drawer";
import Appbar from "@/app/components/Appbar";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Layout from "@/app/components/Layout";
import Title from '@/app/components/Title';


const AlbumId = () => {
  const router = useRouter();
  const { userId, albumId } = router.query; 

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (userId && albumId) {
      
      axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then((response) => {
          setPhotos(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [userId, albumId]);

  return (
    <Layout>
      <Appbar />
      <Breadcrumbs />
      <div className="h-screen flex flex-col justify-center items-center">
        <Title>Fotos do Álbum</Title>
        <div className='bg-white w-[1000px] pt-10 p-6 rounded-lg shadow-lg font-mono text-center text-base md:text-lg lg:text-xl py-6'>
          Álbum ID: {albumId}
        </div>
        {photos.map((photo) => (
          <div key={photo.id}>
            <img className='bg-white w-[1000px] pt-10 p-6 rounded-lg shadow-lg font-mono text-center text-base md:text-lg lg:text-xl py-6' src={photo.thumbnailUrl} alt={photo.title} />
            <div className="bg-white w-[1000px] pt-10 p-6 rounded-lg shadow-lg font-mono text-center text-base md:text-lg lg:text-xl py-6">
              {photo.title}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default AlbumId;