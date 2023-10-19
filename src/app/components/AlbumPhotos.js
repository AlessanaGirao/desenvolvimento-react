import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

const AlbumPhotos = ({ albumId }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    
    axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [albumId]);

  return (
    <div>
      <h2>Fotos do Álbum</h2>
      <div className="photo-list">
        {photos.map((photo) => (
          <div key={photo.id} className="photo">
            <Image src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumPhotos;