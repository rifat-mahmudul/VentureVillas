
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

const ProfileUpdate = () => {


    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        const photoURL = form.photoURL.value;

        updateProfile(auth.currentUser, {
            displayName : username,
            photoURL : photoURL,
        })
        .then()
        .catch(error => {
            console.log(`Error from update profile ${error}`)
        })

        form.reset();
    }

    return (
        <section className="pb-16">
            <div className="w-full mx-auto sm:max-w-sm max-w-[90%] p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
                <h1 className="text-2xl font-bold text-center">Update Profile</h1>
                <form noValidate="" action="" className="space-y-6" onSubmit={handleUpdate}>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-gray-400">Username</label>
                        <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-400">PhotoURL</label>
                        <input type="text" name="photoURL" id="photoURL" placeholder="Please Enter Your photoURL" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required />
                    </div>
                    <button type="submit" className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">save</button>
                </form>
            </div>
        </section>
    )
}

export default ProfileUpdate
