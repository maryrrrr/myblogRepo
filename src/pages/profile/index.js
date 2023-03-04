import { useNavigate } from "react-router-dom";
import { supabase} from '../../data/supabase/client';

const Profile= () =>{
    const navigate= useNavigate();
    const SignOut= async()=>{
        const { error } = await supabase.auth.signOut();
        navigate('/signin');
    }
    
    return(
        <div className='container mx-auto mt-20'
        style={{ maxWidth: "320px" }}>
    <div className="text-4xl font-bold text-center">Hey Guy!</div>
   
        <div className="border border-black rounded p-4 my-2">
            <div>Name:</div>
            <input className="w-full border border-black rounded p-2"
                placeholder="Type Your Name" 
                type="text"/>
            </div>
            <button className="w-42 bg-black text-white rounded p-2 ml-4">Update Your Name</button>
            <button className="w-32 bg-black text-white rounded p-2 ml-3"
                    onClick={()=> SignOut()}>Sign Up</button> 
</div>
    )
}
export default Profile;