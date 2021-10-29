import React, { useState, useEffect } from "react";
import {servicePrice} from "../../common/pageContent";

const Pricing = () => {
    const [price, setPrice] = useState([])
    useEffect(() => {
        setPrice([...servicePrice])
    }, [])

    const serviceItems = price.map((service, index) =>
        <li key={index}
            className="text-xl text-gray-300 leading-loose odd:bg-list-item px-8 py-5"
        >
            <div className=" flex justify-between items-center mb-7">
                <span className="text-xl">{service.name}</span>
                <div className="inline-flex">
                    <div className="border-b-2 border-dotted border-secondary w-24 -translate-y-2.5 mr-1"/>
                    <span className="text-base text-secondary">${service.price}</span>
                </div>
            </div>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, sequi.</p>
        </li>
    )

    return (
        <div className="flex items-center justify-center bg-primary w-screen h-auto min-h-screen font-noto py-28">
            <div className="mx-16 w-[30vw]">
                <div className="flex my-8 items-center">
                    <h2 className="text-3xl text-gray-300 text-left mr-3">價目</h2>
                    <i className="fas fa-cut fa-2x text-gray-300"/>
                </div>
                <p className="break-words text-left leading-7 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi deserunt magnam nobis quasi quis repellendus soluta ut. Adipisci aspernatur, dolorum facilis illo iure libero non pariatur perspiciatis placeat quae quisquam quod reprehenderit sapiente sequi, vero vitae voluptates.</p>
                <button className="btn-lg hover:bg-transparent mt-8">閱讀更多</button>
            </div>
            <div className="w-[40vw]">
                <ul className="list-none text-left w-full">
                    {serviceItems}
                </ul>
            </div>
        </div>
    )
}

export default Pricing
