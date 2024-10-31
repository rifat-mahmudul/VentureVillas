import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './App.css'


const Banner = () => {
    return (
        <section className="pb-16">

        <Swiper
            className="max-w-[90%] xl:max-w-[1200px] mx-auto max-h-[calc(100vh-97px)] font-Roboto"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
            <SwiperSlide>
                <div className="slide1 flex flex-col items-center justify-center h-[calc(100vh-97px)] rounded-lg">
                    <div className=''>
                        <h1 className='text-white text-xl sm:text-3xl lg:text-5xl font-bold max-w-screen-md text-center'>Welcome to <span
                                    className="font-bold bg-gradient-to-r from-purple-600 via-gray-500 to-indigo-600 text-transparent bg-clip-text animate-gradient bg-300%"
                                    >
                                    VENTUREVILLAS
                                    </span>: Where Every Stay Feels Like Home</h1>
                        <p className='text-gray-300 max-w-screen-md text-center sm:mt-5'>Discover a Haven of Elegance and Serenity, Where Every Detail is Curated to Enhance Your Comfort. Step into a World of Warm, Personalized Service, and Unmatched Luxury. Here, Every Stay Transcends the Ordinary, Crafting Lasting Memories with Exceptional Care and Attention, All Tailored to Make You Feel at Home.</p>
                        <div className='text-center mt-4'>
                            <button className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                                <span className="relative text-indigo-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">View Details</span>
                            </button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide2 flex flex-col items-center justify-center h-[calc(100vh-97px)] rounded-lg">
                        <div className=''>
                            <h1 className='text-white text-xl sm:text-3xl lg:text-5xl font-bold max-w-screen-md text-center'>Experience Elegance & Comfort at <span
                                        className="font-bold bg-gradient-to-r from-purple-600 via-gray-500 to-indigo-600 text-transparent bg-clip-text animate-gradient bg-300%"
                                        >
                                        VENTUREVILLAS
                                        </span>
                            </h1>
                            <p className='text-gray-300 max-w-screen-md text-center mt-4 sm:mt-5'>
                                Welcome to a Sanctuary Designed for Comfort, Elegance, and Peace. Every Element of Your Stay is Crafted to Perfection, Offering Unparalleled Hospitality that Goes Beyond Expectations. Escape the Ordinary with Personalized Service, Thoughtful Amenities, and Moments You’ll Cherish, in a Place Where Every Guest Truly Feels at Home.
                            </p>
                            <div className='text-center mt-4'>
                                <button className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                                    <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                                    <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                                    <span className="relative text-indigo-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">View Details</span>
                                </button>
                            </div>
                        </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide3 flex flex-col items-center justify-center h-[calc(100vh-97px)] rounded-lg">
                            <div className=''>
                                <h1 className='text-white text-xl sm:text-3xl lg:text-5xl font-bold max-w-screen-md text-center'>Escape to Tranquility: Discover <span
                                            className="font-bold bg-gradient-to-r from-purple-600 via-gray-500 to-indigo-600 text-transparent bg-clip-text animate-gradient bg-300%"
                                            >
                                            VENTUREVILLAS
                                            </span>
                                </h1>
                                <p className='text-gray-300 max-w-screen-md text-center mt-4 sm:mt-5'>
                                    Enter a World of Unmatched Comfort and Luxury, Where Every Stay Offers More than Just a Room – It’s an Experience Defined by Care, Attention, and Refinement. From Lavish Accommodations to Thoughtful Details, We Redefine Hospitality, Creating a Space That Feels Like Home Yet Offers the Extraordinary.
                                </p>
                                <div className='text-center mt-4'>
                                    <button className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                                        <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                                        <span className="relative text-indigo-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">View Details</span>
                                    </button>
                                </div>
                            </div>
                </div>
            </SwiperSlide>
        </Swiper>

        </section>
    )
}

export default Banner
