import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Drawer from "@/app/components/Drawer";
import Appbar from "@/app/components/Appbar";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Layout from "@/app/components/Layout";
import Button from "@/app/components/Button";
import Title from '@/app/components/Title';
import Bottom from '@/app/components/Bottom';


const UserList = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  return (
    <div>
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
  
      <Layout>
        <Breadcrumbs />
        <Title className="my-8">Lista de Usuários</Title>
        <div>
          <div className={`bg-white w-[800px] pt-10 p-6 rounded-lg shadow-lg font-mono text-center text-base md:text-lg lg:text-xl py-6 mx-auto ${isDrawerOpen ? 'ml-72' : ''}`}>
            {users.map((user) => (
              <div key={user.id} className="bg-white p-4 rounded shadow">
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <Link href={`/user/${user.id}/albuns`}>
                  <Button>Ver Álbuns</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Bottom></Bottom>
      </Layout>
    </div>
  );
};

export default UserList;