import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../home/components/Layout";
import CommentCard from "../post/components/Comment";

const Post= () => {
    const {id}= useParams();
    const [post,setPost]= useState();

    const getPost= () => {
        fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/posts?id=eq.${id}&select=*`,{
            method:"GET",
            headers:{
                apikey:`${process.env.REACT_APP_SUPABASE_ANON_KEY}`
            }
        })
        .then(res => res.json())
        .then((res) => {
            setPost(res[0]) 
        });
    }

    useEffect(()=>{
        getPost(id);

    },[id]);

    return(
        <Layout>
            <div className="border border-black rounded p-2 my-2">
                {!post && <div>Loading...</div>}
                {post && ( 
                <>
                    <div>
                        <img src={post.image} alt={post.title} />
                    </div>
                    <h1 className="font-bold text-3xl">{post.title}</h1>
                    <div>{post.content}</div>
                    <div>
                        <div>like</div>
                        <div>comment</div>
                    </div>
                    
                    <div className="border border-black rounded p-2">
                        <div className="text-xl font-bold">Post Comments</div>
                        <div className="flex border border-black rounded my-2">
                            <input className="flex-1 rounded p-2" type="text" placeholder="Type Your Comment..." />
                            <button className="rounded p-2">Send</button>
                        </div>
                    </div>    
                </>)}
            </div>
                <div>
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                </div>
        </Layout>
    );
}
export default Post;