import Breadcrumbs from "@/app/components/Breadcrumbs";
import Title from "@/app/components/Title";
import React from "react";
import axios from "axios";
import Appbar from "@/app/components/Appbar";
import Layout from "@/app/components/Layout";

const PostPage = ({ post, comments }) => {
    return(
        <div>
            <Layout>
            <Appbar></Appbar>
            <Breadcrumbs></Breadcrumbs>
            <Title>{post.title}</Title>
            <p>{post.body}</p>
            

            <ul>
            {comments.map((comment) => (
                <li key={comment.id}>
                <div className="bg-white shadow-md rounded p-4 mb-4">
                    <p>Título: {comment.name}</p>
                    <p>Email: {comment.email}</p>
                    <p>Body: {comment.body}</p>
                </div>
                </li>
            ))}
            </ul>
            </Layout>
        </div>
    );
}

export async function getServerSideProps({ params }) {
    const { itemId } = params;
    
    const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${itemId}`)
    const post = postResponse.data;

    const commentsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${itemId}/comments`)
    const comments = commentsResponse.data;

    return{
        props: {
            post,
            comments
        }, 
    };
}



export default PostPage;