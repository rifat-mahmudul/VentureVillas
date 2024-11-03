import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
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
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
    
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
});

const Room = ({room}) => {

    const {id, estate_title, image, segment_name, price, status, area, location} = room;

    return (
        
            <div data-aos="zoom-in-down" className='p-4 border border-gray-300 rounded-lg shadow-lg hover:scale-105 transition duration-500'>
                <img src={image} className='h-[200px] w-full rounded-lg' alt="" />
                <div className='flex justify-between items-center mt-3 mb-3'>
                    <h3 className='font-bold'>{estate_title}</h3>
                    <h3><span className='font-bold'>Status :</span> {status}</h3>
                </div>

                <div className='flex justify-between items-center'>
                    <h1>{segment_name}</h1>
                    <h3><span className='font-bold'>Price :</span> {price}</h3>
                </div>
                
                <div className='flex justify-between items-center mt-3'>
                    <h3>{location}</h3>
                    <h3><span className='font-bold'>Area :</span> {area}</h3>
                </div>

                <NavLink to={`room/${id}`}>
                    <div className='bg-gradient-to-r from-indigo-600 via-gray-500 to-purple-600 w-full text-white font-bold text-center py-3 rounded-lg mt-5'>
                            <button>View Property</button>
                    </div>
                </NavLink>
            </div>
        
    )
}

Room.propTypes = {
    room : PropTypes.object
}

export default Room
