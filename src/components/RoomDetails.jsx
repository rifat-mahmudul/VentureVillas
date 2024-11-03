import { NavLink, useLoaderData, useParams } from "react-router-dom"
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

const RoomDetails = () => {

    const rooms = useLoaderData();
    const {id} = useParams();
    const room = (rooms || []).find(room => room.id == id);

    
    
    const {image, description, facilities} = room;

    return (
        <div data-aos="fade-down" data-aos-anchor=".other-element" className="max-w-[90%] xl:max-w-[1000px] mx-auto pb-16">
            <img className="lg:h-[500px] mx-auto w-full rounded-lg" src={image} alt="" />
            <p className="mt-4 mb-3"><span className="font-bold text-xl">Details : </span> {description}</p>
            <p><span className="font-bold text-xl">Facilities</span> : 
                <span> {facilities[0]}</span>,
                <span className="ml-2"> {facilities[1]}</span>,
                <span className="ml-2"> {facilities[2]}</span>,
                <span className="ml-2"> {facilities[3]}</span>
            </p>
            <NavLink to='/'>
                <button className="bg-purple-600 font-bold py-2 px-5 rounded-lg mt-4">Back to Home</button>
            </NavLink>
        </div>
    )
}

export default RoomDetails
