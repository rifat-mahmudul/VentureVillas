/* eslint-disable react/no-unknown-property */
import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <header className="font-Roboto sticky top-0 z-50 backdrop-blur-lg">
            <div className="max-w-[90%] xl:max-w-[1200px] mx-auto flex items-center justify-between py-5">
                <div>
                    <h1 className="font-bold text-2xl">
                        <span className="text-indigo-600">VENTURE</span>
                        <span className="text-purple-600">VILLAS</span>
                    </h1>
                </div>
                
                <div>
                    <nav>
                        <ul className="flex gap-8 items-center">
                            <NavLink className={({isActive}) => isActive ? `text-indigo-600 border-b-2 border-purple-600 font-bold` : `font-semibold`} to='/'>Home</NavLink>
                            <NavLink className={({isActive}) => isActive ? `text-indigo-600 border-b-2 border-purple-600 font-bold` : `font-semibold`} to="/about">About</NavLink>
                            <NavLink className={({isActive}) => isActive ? `text-indigo-600 border-b-2 border-purple-600 font-bold` : `font-semibold`} to='/contactUs'>Contact us</NavLink>
                            <NavLink className={({isActive}) => isActive ? `text-indigo-600 border-b-2 border-purple-600 font-bold` : `font-semibold`} to="/updateProfile">Update Profile</NavLink>
                            <NavLink to='/logIn'>
                                <a href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Log in</span>
                                    <span className="relative invisible">Button Text</span>
                                </a>
                            </NavLink>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Nav
