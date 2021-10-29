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
        <div className="w-screen min-h-screen h-auto bg-background-img bg-center bg-cover bg-secondary text-primary">
            <div className="w-full h-1/12 p-6">
                <h2 className="text-4xl text-center">品質、服務、氛圍</h2>
            </div>
            <div className="w-full h-full flex justify-center">
                <ul className="w-1/3 h-full leading-loose text-left pt-20">
                    {
                        firstProtocolList.map((item, index) =>
                            <li className="flex items-start justify-center my-14" key={index}>
                                <div className="w-[250px] mr-6">
                                    <h4 className="text-2xl text-right">{item.title}</h4>
                                    <p className="font-thin text-right break-all">{item.detail}</p>
                                </div>
                                <i className={item.logo + ' text-secondary'}/>
                            </li>
                        )
                    }
                </ul>
                <div className="w-[400px] h-[625px] bg-protocol-img bg-cover filter brightness-110"/>
                <ul className="w-1/3 h-full leading-loose text-left pt-20">
                    {
                        secondProtocolList.map((item, index) =>
                            <li className="flex items-start justify-center my-14" key={index}>
                                <i className={item.logo + ' text-secondary w-20'}/>
                                <div className="w-[250px]">
                                    <h4 className="text-2xl text-left">{item.title}</h4>
                                    <p className="font-thin text-left break-all">{item.detail}</p>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Protocol
