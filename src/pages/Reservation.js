import React from "react";
import Booking from "../components/reservation/Booking";

const Reservation = () => {

    return (
        <section
            className=
                "w-screen flex pt-32 pb-20 items-start justify-center
                bg-background-img-2 bg-cover bg-secondary text-primary">
            <div className="mx-10 bg-reservation-img h-[600px] w-[480px] bg-cover"/>
            <div className="divide-y h-auto w-1/3 mx-10 px-8 py-6 bg-primary flex flex-col items-center justify-start shadow-2xl rounded-md">
                <h1 className="w-full h-full text-secondary pb-5">
                    <span className="text-3xl py-3 px-6">
                        線上預約
                    </span>
                </h1>
                <Booking/>
            </div>
        </section>
    )
}

export default Reservation
