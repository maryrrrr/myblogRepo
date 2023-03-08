const PostComment= ({commentData}) =>{
    return(
        <div className="border border-black rounded p-2 my-2">
            <div className="font-bold">User</div>
            <div>{commentData.comment}</div>
        </div>

    );
};
export default PostComment;