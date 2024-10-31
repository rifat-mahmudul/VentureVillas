import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

const Room = ({room}) => {

    const {id, estate_title, image, segment_name, price, status, area, location} = room;

    return (
        
            <div className='p-4 border border-gray-300 rounded-lg shadow-lg hover:scale-105 transition duration-500'>
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
