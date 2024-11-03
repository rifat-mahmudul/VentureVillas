import { useContext, useState } from "react";
import { NavLink } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 99, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 25, // the delay on throttle used while scrolling the page (advanced)
        
    
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
});

const Register = () => {

    const {signUpUser} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState();

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        

        setErrorMessage('');

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
            setErrorMessage(error.message);
        });

        form.reset();
    }

    return (
        <section className="pb-16">
            <div data-aos="fade-left" data-aos-anchor=".other-element" className="w-full mx-auto sm:max-w-sm max-w-[90%] p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form noValidate="" action="" className="space-y-6" onSubmit={handleSignUp}>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-gray-400">Username</label>
                        <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-400">PhotoURL</label>
                        <input type="text" name="photoURL" id="photoURL" placeholder="Please Enter Your photoURL" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-400">Email</label>
                        <input type="email" name="email" id="email" placeholder="Please Enter Your email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required />
                        <div className="flex justify-end text-xs text-gray-400">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button type="submit" className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Sign in</button>
                    {
                        errorMessage && <p className="text-red-500">{errorMessage}</p>
                    }
                </form>
                <p className="text-xs text-center sm:px-6 text-gray-400">Already have an account?
                    <NavLink to="/login" rel="noopener noreferrer" href="#" className="underline text-gray-100">log in</NavLink>
                </p>
            </div>
        </section>
    )
}

export default Register
