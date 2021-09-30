import Booking from "../components/reservation/Booking";
import Order from "../components/reservation/Order";
import {useState} from "react";

const Reservation = () => {
    const [tab, setTab] = useState('booking')
    return (
        <div className="w-screen flex pt-32 pb-20 items-start justify-center">
            <div className="mx-10 bg-reservation-img h-[600px] w-[480px] bg-cover"/>
            <div className="divide-y h-auto w-1/3 mx-10 flex flex-col items-center justify-start">
                <div className="divide-x w-full grid grid-cols-2">
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
        </div>
    )
}

export default Reservation
