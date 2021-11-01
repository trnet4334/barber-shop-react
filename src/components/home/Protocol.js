import React, { useState, useEffect } from "react";
import { protocolList } from "../../common/pageContent"

const Protocol = () => {
    const [firstProtocolList, setFirstProtocolList] = useState([])
    const [secondProtocolList, setSecondProtocolList] = useState([])
    useEffect(() => {
        setFirstProtocolList([...protocolList.splice(0, 3)])
        setSecondProtocolList([...protocolList.splice(0, 3)])
    }, [])

    return (
        <section className="w-screen lg:min-h-screen h-auto py-16 lg:pt-16 md:pb-0 bg-background-img-2 md:bg-background-img bg-center bg-cover bg-secondary text-primary">
            <div className="w-full h-1/12 pb-8">
                <h4 className="text-base font-base leading-relaxed text-center text-secondary">Why choose us</h4>
                <h2 className="text-3xl md:text-4xl text-center">我們是您最好的選擇</h2>
            </div>
            <div className="w-full h-full flex flex-col items-center md:flex-row justify-center">
                <ul className="w-full md:w-1/3 h-full leading-loose text-left md:pt-20">
                    {
                        firstProtocolList.map((item, index) =>
                            <li className="flex flex-row-reverse md:flex-row items-start justify-center my-5 lg:my-14" key={index}>
                                <div className="w-[250px] ml-1 md:mr-4">
                                    <h4 className="text-xl text-left lg:text-2xl md:text-right">{item.title}</h4>
                                    <p className="font-thin text-left md:text-right break-all">{item.detail}</p>
                                </div>
                                <i className={item.logo + ' text-secondary w-12 lg:w-20'}/>
                            </li>
                        )
                    }
                </ul>
                <div className="w-[250px] h-[435px] lg:w-[400px] lg:h-[625px] bg-protocol-img bg-cover filter brightness-110 my-7 md:my-0"/>
                <ul className="w-full md:w-1/3 h-full leading-loose text-left md:pt-20">
                    {
                        secondProtocolList.map((item, index) =>
                            <li className="flex items-start justify-center my-5 lg:my-14" key={index}>
                                <i className={item.logo + ' text-secondary w-12 lg:w-20'}/>
                                <div className="w-[250px] ml-1 md:mr-4">
                                    <h4 className="text-xl text-left lg:text-2xl">{item.title}</h4>
                                    <p className="font-thin text-left break-all">{item.detail}</p>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        </section>
    )
}

export default Protocol
