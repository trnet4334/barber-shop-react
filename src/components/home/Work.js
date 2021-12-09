import React from "react";
import Image from "../utilities/Image";

const Work = () => {
  return (
    <div
      className=
        "h-auto w-screen min-h-screen relative overflow-hidden relative

        before:bg-work-bg before:bg-fixed
        before:absolute before:inset-0 before:block
        before:w-full before:h-full before:z-[-1] before:brightness-[0.25]"
    >
      <div className="w-full h-[425px] flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl text-secondary-mild py-10">探索我們的工作</h2>
        <div className="btn-ripple">
          <i className="fas fa-play"/>
        </div>
      </div>
      <div className="w-full h-[225px] inline-flex absolute bottom-0 left-0">
        <Image
          alternate='work 1'
          source='bg-primary bg-work-img-1'
          width='w-full xs-r:w-1/2 sm-r:w-1/2 md-r:w-1/3 lg:w-1/4'
          height='h-full'
          backgroundFeature='bg-center bg-cover'
        />
        <Image
          alternate='work 2'
          source='bg-primary bg-work-img-2'
          width='xs-r:w-1/2 sm-r:w-1/2 md-r:w-1/3 lg:w-1/4'
          height='h-full'
          backgroundFeature='bg-center bg-cover'
        />
        <Image
          alternate='work 3'
          source='bg-primary bg-work-img-3'
          height='h-full'
          width='md-r:w-1/3 lg:w-1/4'
          backgroundFeature='bg-center bg-cover'
        />
        <Image
          alternate='work 4'
          source='bg-primary bg-work-img-4'
          width='lg:w-1/4'
          height='h-full'
          backgroundFeature='bg-center bg-cover'
        />
      </div>
    </div>
  )
}

export default Work
