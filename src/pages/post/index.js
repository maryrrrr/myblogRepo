import Layout from "../home/components/Layout";
import CommentCard from "../post/components/Comment";

const Post= () => {

    return(
        <Layout>
            <div className="border border-black rounded p-2 my-2">
                <div>Image</div>
                <h1 className="font-bold text-3xl">Post Title</h1>
                <div>Post Content</div>
                <div>
                    <div>like</div>
                    <div>comment</div>
                </div>
            </div>
            <div className="border border-black rounded p-2">
                <div className="text-xl font-bold">Post Comments</div>
                <div className="flex border border-black rounded my-2">
                    <input className="flex-1 rounded p-2" type="text" placeholder="Type Your Comment..." />
                    <button className="rounded p-2">Send</button>
                </div>
                <div>
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                </div>
                
            </div>
        </Layout>
    );
}
export default Post;