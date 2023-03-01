const Profile= () =>{
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

            <button className="w-full bg-black text-white rounded p-2">Update Your Name</button>
   
</div>
    )
}
export default Profile;