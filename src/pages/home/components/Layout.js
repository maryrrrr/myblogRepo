import Nav from './Nav';
const Layout= ({children}) => {
    return(
        <div className='container mx-auto' 
        style= {{maxWidth: '640px'}}>
            <div className='text-4xl text-center font-bold my-5'>
                Welcome to My Awesome Website!
            </div>
            <Nav />
            <div>{children}</div>
        </div>
    )
}
export default Layout;