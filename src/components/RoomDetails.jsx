import { NavLink, useLoaderData, useParams } from "react-router-dom"

const RoomDetails = () => {

    const rooms = useLoaderData();
    const {id} = useParams();
    const room = (rooms || []).find(room => room.id == id);

    
    
    const {image, description, facilities} = room;

    return (
        <div className="max-w-[90%] xl:max-w-[1000px] mx-auto pb-16">
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
