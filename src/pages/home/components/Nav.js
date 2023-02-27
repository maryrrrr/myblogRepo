import React from "react";
const Nav = () =>{
    return(
            <nav className='flex border border-black rounded p-2'>
                <ul className='flex flex-1'>
                    <li>
                        <a className="p-2 hover:bg-black hover:rounded hover:text-white" 
                        href= "/">Home</a>
                    </li>
                    <li>
                        <a className="p-2 hover:bg-black hover:rounded hover:text-white" 
                        href= "/category/fun">Fun</a>
                    </li>
                    <li>
                        <a className="p-2 hover:bg-black hover:rounded hover:text-white" 
                        href= "/category/crime">Crime</a>
                    </li>
                </ul>
                <div>
                    <a className="p-2 hover:bg-black hover:rounded hover:text-white" 
                    href="/profile">profile</a>
                </div>
            </nav>

    )
}
export default Nav;