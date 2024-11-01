import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Register = () => {

    const {signUpUser} = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(username, photoURL, email, password);
        signUpUser(email, password)
        .then(result => {
            console.log(result.user);
            updateProfile(auth.currentUser, {
                displayName : username,
                photoURL : photoURL,
            })
            .then()
            .catch(error => {
                console.log(`Error form update profile ${error}`);
            })

            
        })
        .catch(error => {
            console.log('The Error from Sign Up : ', error);
        })
    }

    return (
        <section className="pb-16">
            <div className="w-full mx-auto sm:max-w-sm max-w-[90%] p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form noValidate="" action="" className="space-y-6" onSubmit={handleSignUp}>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-gray-400">Username</label>
                        <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-400">PhotoURL</label>
                        <input type="text" name="photoURL" id="photoURL" placeholder="Please Enter Your photoURL" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-400">Email</label>
                        <input type="email" name="email" id="email" placeholder="Please Enter Your email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                        <div className="flex justify-end text-xs text-gray-400">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button type="submit" className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Sign in</button>
                </form>
                <p className="text-xs text-center sm:px-6 text-gray-400">Already have an account?
                    <NavLink to="/login" rel="noopener noreferrer" href="#" className="underline text-gray-100">log in</NavLink>
                </p>
            </div>
        </section>
    )
}

export default Register
