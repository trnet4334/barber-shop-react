import React, { useState, useEffect } from "react";
import {servicePrice} from "../../common/pageContent";

const Pricing = () => {
    const [price, setPrice] = useState([])
    useEffect(() => {
        setPrice([...servicePrice])
    }, [])

    const serviceItems = price.map((service) =>
        <ul className="list-none text-left w-[85vw] lg:w-[40vw] mb-5">
            <h4 className="flex items-end text-secondary text-xl md:text-2xl mb-4 pb-3 border-b-[0.1px] border-gray-600">
                <span>{service.category}</span>
                <span className="text-lg text-gray-300 font-light ml-3">{service.translation}</span>
            </h4>
            {
                service.detail.map((item, index) =>
                    <li key={item.name+index}
                        className="text-xl text-btn-text leading-loose odd:bg-list-item px-8 py-1.5"
                    >
                        <div className=" flex justify-between items-center mb-1">
                            <span className="text-base md:text-lg">{item.name}</span>
                            <div className="inline-flex">
                                <div className="border-b-2 border-dotted border-secondary w-12 md:w-24 -translate-y-2.5 mr-1"/>
                                <span className="text-sm md:text-base text-secondary">${item.price}</span>
                            </div>
                        </div>
                        <p className="text-sm md:text-base font-light text-gray-400">{item.translation}</p>
                    </li>
                )
            }
        </ul>
    )

    return (
        <section className="bg-primary max-w-screen h-auto min-h-screen font-noto px-10 py-12 overflow-hidden">
            <div className="w-full flex mb-14 items-center justify-center">
                <h2 className="text-3xl md:text-4xl text-btn-text text-center mr-3">價格說明</h2>
                <i className="fas fa-cut fa-2x text-btn-text"/>
            </div>
            <div className="w-full flex flex-col lg:flex-wrap justify-start items-center lg:max-h-[850px]">
                {serviceItems}
            </div>
        </section>
    )
}

export default Pricing
