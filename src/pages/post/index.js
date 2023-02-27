import Layout from "../home/components/Layout";
import PostComment from "./components/Comment";

const Post= () => {
    return(
        <Layout>
            <div className="border border-black rounded p-2 my-2">
                <div className="m-2">Post Image</div>
                <h1>Post Title</h1>
                <div>Post Content</div>
                <div className="flex">
                    <div>like</div>
                </div>
            </div>
            <div className="border border-black rounded p-2">
                <div className="text-2xl font-bold">Post Comments</div>
                <div className="flex border border-black rounded my-2">
                    <input className="flex-1 p-2" type="text" placeholder="Type Your Comment..." />
                    <button className="rounded bg-black text-white ml-2">Send</button>
                </div>
                <div>
                    <PostComment />
                    <PostComment />
                    <PostComment />
                </div>
                
            </div>
        </Layout>
    );
}
export default Post;