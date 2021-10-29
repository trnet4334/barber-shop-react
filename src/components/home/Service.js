import React, {useState, useEffect} from "react";
import {serviceList} from "../../common/pageContent";

const Service = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        setService([...serviceList])
    }, [])

    return (
        <div className="w-screen h-auto min-h-screen px-10 py-24 bg-secondary flex items-start justify-center">
            <div className="w-1/2 h-full text-primary">
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="w-7/12 mb-6">
                        <h2 className="text-4xl mb-10 text-left">專業、時尚、尊榮服務</h2>
                        <p className="break-word mb-12 font-light text-left leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque earum eius et labore nam qui quis quod repellat! Aliquam, ducimus est eveniet facilis fugiat impedit labore neque nisi sed veritatis.</p>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-5 gap-4">
                        {
                            service.map((item, index) =>
                                <div className={item.class + ' bg-primary w-72 h-72 px-10 flex flex-col justify-center text-btn-text hover:ring-btn-primary hover:ring-2'} key={index}>
                                    <i className={item.logo}/>
                                    <p className="text-3xl my-4">{item.title}</p>
                                    <p className="text-center break-all">{item.detail}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="w-[550px] h-[125vh] bg-service-img bg-cover"/>
        </div>
    )
}

export default Service
