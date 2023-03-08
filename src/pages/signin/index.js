import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase} from '../../data/supabase/client';

const SignIn = () => {
    const [email, setEmail]= useState();
    const [password, setPassword]= useState();
    const [isSignIn, setIsSignIn]= useState(true);
    const [isLoading, setIsLoading]= useState(false); 
    const [message, setMessage]= useState("");

    const navigate= useNavigate();

    const SignInUser= async() =>{
        const { user, session, error  } = await supabase.auth.signInWithPassword({
            email,
            password,
        })
        setIsLoading(false);
        if(!error){
            navigate('/');
        }

    }

    const SignUpUser= async()=>{
        const { user, session, error  } = await supabase.auth.signUp({
            email,
            password,
          })
          setIsLoading(false);
          if(!error){
            setMessage("We sent you an amazing email. Please check your email!");
          }
    }

        const SubmitForm= (e) => {
            e.preventDefault();
            setIsLoading(true);
            setMessage("");
            if(isSignIn){
                SignInUser();
            }else {
                SignUpUser();
                }
            }

            useEffect(() =>{
                const getSession= async() => {
                    const { data } = await supabase.auth.getSession();
                    if(data.session){
                        navigate("/profile");
                    }
                };
                getSession();
            },[navigate]);

    return(
        <div className='container mx-auto mt-20'
                style={{ maxWidth: "320px" }}>
            <div className="text-4xl font-bold text-center">Let's Go!</div>
            {message.length>0 && (
                <div className="border border-1 rounded p-2">{message} </div>
            )}
           <form onSubmit= {SubmitForm}>
                <div className="border border-black rounded p-4 my-2">
                    <div>Email:</div>
                    <input onChange={(e)=> setEmail(e.target.value)} 
                        className="w-full border border-black rounded p-2"
                        placeholder="Type Your Email" 
                        type="email"
                        value={email}/>

                    <div>Password:</div>
                    <input onChange={(e)=> setPassword(e.target.value)}
                        className="w-full border border-black rounded p-2" 
                        placeholder="At Least 6 Characters" 
                        type="password" 
                        value={password}/>
                </div>
                <div className="flex">
                    <button type ="submit" 
                        disabled={isLoading}
                        className="w-42 bg-black text-white rounded p-2 mx-6">
                        {!isLoading && isSignIn ? "Sign In": "Sign Up"}
                        {isLoading && "Waiting... "}
                    </button>

                    <button type ="submit" 
                        className="w-42 bg-black text-white rounded p-2"
                        onClick= {()=> setIsSignIn((prev) =>!prev)}>
                        {!isSignIn ? "Sign In": "Sign Up"}
                    </button>
                </div>
            </form>
        </div>
    );
}
export default SignIn;