import React, {useState, useEffect} from "react";
import {serviceList} from "../../common/pageContent";
import Image from "../utilities/Image";

const Service = () => {
  const [service, setService] = useState([])
  useEffect(() => {
    setService([...serviceList])
  }, [])

  return (
    <div className="w-screen h-auto min-h-screen px-2 py-12 bg-secondary-light flex flex-col-reverse md:flex-row items-center md:items-start justify-center">
      <div className="w-full md-r:w-1/2 lg-r:w-5/12 xl:w-1/2 h-full text-primary">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-11/12 xl:w-7/12 mb-4">
            <h4 className="text-base font-base leading-relaxed text-left text-secondary-dark">Our First Priority</h4>
            <h2 className="text-3xl md:text-4xl mb-5 md:mb-10 text-left">給客戶最尊榮的服務</h2>
            <p className="break-word mb-12 font-light text-left leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque earum eius et labore nam qui quis quod repellat! Aliquam, ducimus est eveniet facilis fugiat impedit labore neque nisi sed veritatis.</p>
          </div>
          <div className="xl:grid xl:grid-cols-2 xl:grid-rows-5 gap-4">
            {
              service.map((item, index) =>
                <div className={item.class + ' mb-5 xl:mb-0 bg-primary w-96 h-40 xs-max:w-72 xs-max:h-52 xl:w-64 xl:h-64 px-8 flex flex-col justify-center text-secondary-mild hover:ring-secondary-dark hover:ring-2'} key={index}>
                  <p className="text-2xl xl:text-3xl my-5"><i className={item.logo + ' mr-2'}/>{item.title}</p>
                  <p className="text-center font-light break-all">{item.detail}</p>
                </div>
              )
            }
          </div>
        </div>
      </div>
      <Image
        alternate='Service img'
        source='bg-service-img'
        width='xs-max:w-[90vw] xs-r:w-[90vw] sm-r:w-[75vw] md-r:w-[375px] lg:w-[450px]'
        height='xs-max:h-[250px] xs-r:h-[275px] sm-r:h-[325px] md-r:h-[900px] lg:h-[1100px]'
        backgroundFeature='bg-cover'
        position='mb-10 mb:mb-0'
      />
    </div>
  )
}

export default Service
