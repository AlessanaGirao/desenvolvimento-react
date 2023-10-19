// pages/user/UserList.js
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Layout from "@/app/components/Layout";
import Drawer from "@/app/components/Drawer";
import Appbar from "@/app/components/Appbar";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Layout>
      <Appbar></Appbar>
      <Breadcrumbs></Breadcrumbs>
      <div>
        <h1>Lista de Usuários</h1>
        {users.map((user) => (
          <div key={user.id}>
            <div>
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              
              <Link href={`/user/${user.id}/albums`}>
                <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Ver Álbuns
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default UserList;