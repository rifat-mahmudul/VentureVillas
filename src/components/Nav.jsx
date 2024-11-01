/* eslint-disable react/no-unknown-property */
import { Link, NavLink } from "react-router-dom"
import { TbMenuDeep } from "react-icons/tb";
import { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../provider/AuthProvider";

const Nav = () => {

    const [open, setOpen] = useState(false);

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error =>{
            console.log(`Error form log out. ${error}`)
        })
    }

    return (
        <header className="font-Roboto sticky top-0 z-50 backdrop-blur-lg">
            <div className="max-w-[90%] xl:max-w-[1200px] mx-auto flex items-center justify-between py-5">
                <div>
                    <Link to='/' className="font-bold text-xl sm:text-2xl">
                        <span className="text-indigo-600">VENTURE</span>
                        <span className="text-purple-600">VILLAS</span>
                    </Link>
                </div>
                <div>
                    <nav>
                        <ul className="lg:flex gap-8 items-center hidden">
                            <NavLink className={({isActive}) => isActive ? `text-indigo-600 border-b-2 border-purple-600 font-bold` : `font-semibold`} to='/'>Home</NavLink>
                            <NavLink className={({isActive}) => isActive ? `text-indigo-600 border-b-2 border-purple-600 font-bold` : `font-semibold`} to="/about">About</NavLink>
                            <NavLink className={({isActive}) => isActive ? `text-indigo-600 border-b-2 border-purple-600 font-bold` : `font-semibold`} to='/contactUs'>Contact us</NavLink>
                            

                            {
                                user 
                                ?
                                <>
                                <NavLink className={({isActive}) => isActive ? `text-indigo-600 border-b-2 border-purple-600 font-bold` : `font-semibold`} to="/updateProfile">Update Profile</NavLink>
                                
                                    <div className="relative group h-12 w-12 rounded-full border border-indigo-500">
                                        <img className="w-full h-full rounded-full" src={user?.photoURL} alt="" />

                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-purple-800 text-white text-xs rounded py-1 px-2">
                                            <p>{user?.displayName}</p>
                                        </div>
                                    </div>

                                    <button onClick={handleLogOut} href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Log Out</span>
                                        <span className="relative invisible">Button Text</span>
                                    </button>
                                </>
                                :
                                <NavLink to='/logIn'>
                                    <button href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Log in</span>
                                        <span className="relative invisible">Button Text</span>
                                    </button>
                                </NavLink>
                            }
                            
                        </ul>

                        <button onClick={() => setOpen(!open)} className="lg:hidden">
                            {
                                open ?  <RxCross2 size={30} /> : <TbMenuDeep size={30} />
                            }
                        </button>
                        
                    </nav>

                    <nav className={`bg-gradient-to-t from-indigo-600 to-purple-500 text-white w-full absolute right-0 py-4 duration-1000 ${open ? `top-16` : ` -top-96`}`}>
                        <ul className="flex flex-col gap-8 items-center lg:hidden">
                            <NavLink className={({isActive}) => isActive ? ` border-b-2 border-black font-bold` : `font-semibold`} to='/'>Home</NavLink>
                            <NavLink className={({isActive}) => isActive ? ` border-b-2 border-black font-bold` : `font-semibold`} to="/about">About</NavLink>
                            <NavLink className={({isActive}) => isActive ? ` border-b-2 border-black font-bold` : `font-semibold`} to='/contactUs'>Contact us</NavLink>
                            <NavLink className={({isActive}) => isActive ? `border-b-2 border-black font-bold` : `font-semibold`} to="/updateProfile">Update Profile</NavLink>
                            
                            {
                                user 
                                ?
                                <>
                                    <div className="relative group h-12 w-12 rounded-full border border-indigo-500">
                                        <img className="w-full h-full rounded-full" src={user?.photoURL} alt="" />

                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-purple-800 text-white text-xs rounded py-1 px-2">
                                            <p>{user?.displayName}</p>
                                        </div>
                                    </div>

                                    <button onClick={handleLogOut} href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Log Out</span>
                                        <span className="relative invisible">Button Text</span>
                                    </button>
                                </>
                                :
                                <NavLink to='/logIn'>
                                    <button href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Log in</span>
                                        <span className="relative invisible">Button Text</span>
                                    </button>
                                </NavLink>
                            }
                                
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Nav
