import React from "react";
import Booking from "../components/reservation/Booking";
import Order from "../components/reservation/Order";
import {useState, useRef} from "react";

const Reservation = () => {
    const [tab, setTab] = useState('booking')
    const reserveTabRef = useRef()
    const orderTabRef = useRef()

    return (
        <div className="w-screen flex pt-32 pb-20 items-start justify-center">
            <div className="mx-10 bg-reservation-img h-[600px] w-[480px] bg-cover"/>
            <div className="divide-y h-auto w-1/3 mx-10 flex flex-col items-center justify-start">
                <div className="w-full grid grid-cols-2 py-5">
                    <h1
                        className="w-full h-full"
                        onClick={() => setTab('booking')}
                    >
                        <span
                            className="text-2xl py-3 px-6 rounded-md hover:bg-gray-300 hover:text-white cursor-pointer"
                            ref={reserveTabRef}
                        >
                            線上預約
                        </span>
                    </h1>
                    <h1
                        className="w-full h-full"
                        onClick={() => setTab('order')}
                    >
                        <span
                            className="text-2xl py-3 px-6 rounded-md hover:bg-gray-300 hover:text-white focus:underline cursor-pointer"
                            ref={orderTabRef}
                        >
                            預約查詢
                        </span>
                    </h1>
                </div>
                {tab === 'booking' && <Booking/>}
                {tab === 'order' && <Order/>}
            </div>
        </div>
    )
}

export default Reservation
