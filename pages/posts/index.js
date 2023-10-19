import Breadcrumbs from "@/app/components/Breadcrumbs";
import Layout from "@/app/components/Layout";
import Appbar from "@/app/components/Appbar";
import React, {useEffect, useState} from "react";
import Title from "@/app/components/Title";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Drawer from "@/app/components/Drawer";
import axios from "axios";
import Bottom from '@/app/components/Bottom';

const Posts = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', body: '', userId: '' });
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log('Resposta da API (get):', response.data);
        setPosts(response.data);
      } catch (error) {
        console.log('Error ao carregar o get:', error);
      }
    };
    loadPosts();
  }, []);

  const onSubmit = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
      console.log('Resposta da API (post): ', response.data);
      setPosts([response.data, ...posts]);
      setNewPost({ title: '', body: '', userId: '' });
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (postId) => {
    try {
      const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`, newPost);
      if (response) {
        console.log('Resposta da API (delete): Deletado com sucesso!');
        alert('deletado com sucesso');
      }
      const updatedPosts = posts.filter((post) => post.id !== postId);
      setPosts(updatedPosts);
    } catch (error) {
      console.log(error);
    }
  };
  
    return(
        <div>
            <Layout>
            <Appbar onMenuToggle={handleMenuToggle}></Appbar>
            <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
            <Breadcrumbs></Breadcrumbs>
            <Title>Deixe seu comentário!</Title>

            <div>
            <form className="bg-white w-[1000px] pt-6 p-6 rounded-lg shadow-lg font-mono text-center text-base md:text-lg lg:text-xl py-6 mx-auto" onSubmit={handleSubmit(onSubmit)}>
            
                <input 
                    placeholder="Titulo do comentário"
                    {...register('title', {
                        required: 'Title é um campo obrigatório',
                        minLength: {value: 3, message: 'O campo título do post deve ter 3 caracteres ou mais!'},
                        maxLength: {value: 50, message: 'O campo título do post deve ter no máximo 50 caracteres!'},
                    })}
                    value={newPost.title}
                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                    className="border rounded py-2 px-3  "
                />
                <input 
                    placeholder="Corpo do comentário"
                    {...register('body', {
                        required: 'Body é um campo obrigatório',
                        minLength: {value: 10, message: 'O campo body do post deve ter 10 caracteres ou mais!'},
                        maxLength: {value: 100, message: 'O campo body do post deve ter no máximo 100 caracteres!'},
                    })}
                    value={newPost.body}
                    onChange={(e) => setNewPost({...newPost, body: e.target.value})}
                    className="border rounded py-2 px-3"
                    />
                
                <button
              className="bg-gray-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded ring-2 ring-purple-500/50"
                    > 
                Enviar
                </button>
            </form>
            </div>

            {errors.title && <span className="text-red-500">{errors.title.message}</span>}
            {errors.body && <span className="text-red-500">{errors.body.message}</span>}

            <div>
                <ul>
                {posts.map((post) => (
        
                    <div className="flex justify-center items-center">
                    <div className="font-mono bg-white shadow-md rounded p-4 mb-4 mx-auto text-center bg-white w-[1000px] pt-10 p-6 rounded-lg shadow-lg font-mono text-center text-base md:text-lg lg:text-xl py-6">
                        <li key={post.id}>
                        <strong>Titulo: </strong>
                        <Link className="font-mono font-semibold text-blue-500" href={`/posts/${post.id}`}>{post.title}</Link>
                        <p><strong>Post: </strong>{post.body}</p>
                        </li>
                        <button 
                        onClick={() => deletePost(post.id)}
                        className="bg-gray-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded ring-2 ring-purple-500/50"
                        > 
                        Deletar
                        </button>
                    </div>
                    </div>
                ))}
                </ul>
            </div>
            <Bottom></Bottom>
            </Layout>
            
        </div>
    )
}

export default Posts;