import React from "react";
import Booking from "../components/reservation/Booking";
import Image from "../components/utilities/Image";

const Reservation = () => {

  return (
    <section
      className=
        "w-screen flex flex-col md:flex-row pt-32 pb-20 items-center justify-center
        bg-background-img-2 bg-cover bg-secondary text-primary">
      <Image
        alternate='Reservation Image'
        source='bg-reservation-img'
        width='lg:w-[37.5vw]'
        height='lg:h-[50vw]'
        backgroundFeature='bg-cover bg-center'
        position='lg:mx-10'
      />
      <div
        className="divide-y h-auto xs-max:w-[90vw] w-4/5 lg:w-2/5 mx-10 px-8 py-6 bg-primary flex flex-col items-center justify-start shadow-2xl rounded-md">
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
