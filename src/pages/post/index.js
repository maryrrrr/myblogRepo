import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../home/components/Layout";
import PostComment from "../post/components/Comment";
import { supabase } from "../../data/supabase/client";

const Post= () => {
    const {id}= useParams();
    const [post,setPost]= useState();
    const [comment, setComment]= useState("");
    const [userId, setUserId]= useState();
    const [comments, setComments]= useState([]);
    const [isLike, setIsLike]= useState(false);

    const getPost= async(id) => {
        fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/posts?id=eq.${id}&select=*`,
            {
              method: "GET",
              headers: {
                apikey: process.env.REACT_APP_SUPABASE_ANON_KEY,
                Authorization: process.env.REACT_APP_SUPABASE_ANON_KEY,
              },
            })
        .then(res => res.json())
        .then((response) => {
            setPost(response[0]) 
        });
        getPostComments(id);
    }

    const getPostComments= async(id)=> {
        const { data: comments, error } = await supabase
        .from("post_comments")
        .select("*")
        .eq("postId",id)
        setComments(comments);
    }

    useEffect( ()=>{
        getPost(id);

    },[id]);

    useEffect( ()=> {
        const getUserPostLike= async() =>{
            const { data } = await supabase
            .from("post-like")
            .select("*")
            .eq("postId", id)
            .eq("userId", userId)

            if(data.length>0){
                setIsLike(true);
            }
        };
        getUserPostLike();

    },[id, userId]);

    useEffect( ()=>{
        const getSession= async() => {
            const { data, error } = await supabase.auth.getSession();
            setUserId(data.session.id);
        };
        getSession();
    },[]);


    const SendComment= async() => {
        const { data, error } = await supabase
        .from("post_comments")
        .insert([
            { comment, userId, postId:id },
        ]);
        getPostComments(id);
    };

    const handleLikeClick= async() => {
        if(!isLike){
            const { data, error } = await supabase
            .from("post-like")
            .insert([{ postId: id, userId }]);
            }
        };

    return(
        <Layout>
            <div className="border border-black rounded p-2 my-2">
                {!post && <div>Loading...</div>}
                {post && ( 
                    <>
                        <div className="m-2">
                            <img src={post.image} 
                                 alt={post.title} />
                        </div>
                        <h1 className="font-bold text-3xl">{post.title}</h1>
                        <div>{post.content}</div>
                        <div className="flex">
                            <div className= {`border border-1 rounded m-2 p-2 ${isLike && "bg-black text-white"}`}>
                                <div onClick={ ()=> handleLikeClick()}>like</div>
                            </div>
                        </div>
                    </>
                )}
            </div>
                    <div className="border border-black rounded p-2">
                        <div className="text-xl font-bold">Post Comments</div>
                        <div className="flex border border-black rounded my-2">
                            <input 
                                value= {comment}
                                onchange= {(e) => setComment(e.target.value)}
                                className="flex-1 border-none outline-none rounded p-2" type="text" 
                                placeholder="Type Your Comment..."
                             />
                            <button 
                                className="rounded p-2"
                                onClick={() =>SendComment()}
                                >Send</button>
                        </div>   
              
                        <div> 
                            {comments.map((comment) => (
                                <PostComment  key={comment.id}
                                              commentData={comment} />))}
                        </div>
                    </div>
        </Layout>
    );
};
export default Post;