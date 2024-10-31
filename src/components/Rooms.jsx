import { useEffect, useState } from "react"
import Room from "./Room";

const Rooms = () => {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('Data.json')
        .then(res => res.json())
        .then(data => setRooms(data))
    }, [])

    return (
        <section className="pb-16">
            <h1 className="max-w-[90%] xl:max-w-[1200px] mx-auto font-bold bg-gradient-to-r from-purple-600 via-gray-500 to-indigo-600 text-transparent bg-clip-text animate-gradient bg-300% text-center text-3xl sm:text-4xl lg:text-5xl">Our Luxuries Accommodation</h1>
            <div className="max-w-[90%] xl:max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {
                    rooms.map(room => <Room key={room.id} room={room}></Room>)
                }
            </div>
        </section>
    )
}

export default Rooms
