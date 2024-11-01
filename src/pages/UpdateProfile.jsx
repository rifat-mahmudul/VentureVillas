import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { NavLink } from "react-router-dom";

const UpdateProfile = () => {

    const {user} = useContext(AuthContext);

    return (
        <div className="max-w-[90%] sm:max-w-sm mx-auto p-4 border border-gray-400 rounded-lg shadow-xl text-center">
            <div className="h-[200px] w-[200px] rounded-full border border-gray-300 mx-auto">
                <img className="h-[200px] w-[200px] rounded-full" src={user?.photoURL} alt="" />
            </div>

            <h1 className="text-3xl font-bold mt-4 border-t border-gray-300 border-b py-3">{user?.displayName}</h1>
            <p className="text-xl mt-3 border-gray-300 border-b pb-3">
                {user?.email}
            </p>
            <NavLink to='/profileUpdate'>
                <div className='bg-gradient-to-r from-indigo-600 via-gray-500 to-purple-600 w-full text-white font-bold text-center py-3 rounded-lg mt-5 cursor-pointer'>
                    <button>Update Name and Photo</button>
                </div>
            </NavLink>
        </div>
    )
}

export default UpdateProfile
