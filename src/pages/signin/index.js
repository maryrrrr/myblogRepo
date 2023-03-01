const SignIn = () => {
    return(
        <div className='container mx-auto mt-20'
                style={{ maxWidth: "320px" }}>
            <div className="text-4xl font-bold text-center">Let's Go!</div>
           
                <div className="border border-black rounded p-4 my-2">
                    <div>Email:</div>
                    <input className="w-full border border-black rounded p-2"
                        placeholder="Type Your Email" 
                        type="email"/>
                    <div>Password:</div>
                    <input className="w-full border border-black rounded p-2" 
                        placeholder="At Least 6 Characters" 
                        type="password" />
                </div>

                    <button className="w-32 bg-black text-white rounded p-2 mx-6">SignIn</button>
                    <button className="w-32 bg-black text-white rounded p-2">SignUp</button>
           
        </div>
    );
}
export default SignIn;