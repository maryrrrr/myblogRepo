import { Link } from 'react-router-dom';
const PostCard= () =>{
    return(
        <div className='flex border border-black rounded my-2 p-2'>
            <div className="w-24">
                <Link to='/post/1'>Image</Link>
            </div>
            <div className="flex-1">
                <div className="font-bold text-3xl">
                    <Link to='/post/1'>Post Title</Link>
                </div>
                <div>Post Description</div>
                <div className="flex">
                    <div className='py-1 px-2 hover:bg-black hover:text-white hover:rounded'>Like</div>
                    <div className='py-1 px-2 hover:bg-black hover:text-white hover:rounded'>Comment</div>
                </div>
            </div>
        </div>
    )
}
export default PostCard;