import Booking from "../components/reservation/Booking";
import Order from "../components/reservation/Order";
import {useState} from "react";

const Reservation = () => {
    const [tab, setTab] = useState('booking')
    return (
        <div className="divide-y w-screen min-h-screen pt-24 flex flex-col items-center">
            <div className="divide-x w-1/2 grid grid-cols-2">
                <h1
                    className="text-3xl py-3 px-6 rounded-md hover:bg-red-700 hover:text-gray-300 cursor-pointer"
                    onClick={() => setTab('booking')}
                >
                    線上預約
                </h1>
                <h1
                    className="text-3xl py-3 px-6 rounded-md hover:bg-red-700 hover:text-gray-300 cursor-pointer"
                    onClick={() => setTab('order')}
                >
                    預約查詢
                </h1>
            </div>
            {tab === 'booking' && <Booking/>}
            {tab === 'order' && <Order/>}
        </div>
    )
}

export default Reservation
