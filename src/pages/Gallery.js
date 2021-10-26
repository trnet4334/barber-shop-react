import React from 'react';

const Gallery = () => {
    return (
        <section className="w-screen h-auto min-h-screen bg-secondary bg-background-img-2 bg-cover pt-24 px-12 text-primary">
            <h1 className="text-center text-4xl pt-8">作品集</h1>
            <div className="w-full h-auto p-20 flex items-center justify-center">
                <div className="flex flex-wrap w-[71vw] h-auto justify-between">
                    <div className="bg-gallery-img-1 bg-cover bg-top filter brightness-[0.3] hover:brightness-110 w-[23vw] h-[25vw]"/>
                    <div className="bg-gallery-img-2 bg-cover bg-top filter brightness-[0.3] hover:brightness-110 w-[23vw] h-[25vw]"/>
                    <div className="bg-gallery-img-3 bg-cover bg-top filter brightness-[0.3] hover:brightness-110 w-[23vw] h-[25vw]"/>
                    <div className="bg-gallery-img-4 bg-cover bg-top filter brightness-[0.3] hover:brightness-110 w-[47vw] h-[25vw] mt-3"/>
                    <div className="bg-gallery-img-5 bg-cover bg-top filter brightness-[0.3] hover:brightness-110 w-[23vw] h-[25vw] mt-3"/>
                    <div className="bg-gallery-img-6 bg-cover bg-top filter brightness-[0.3] hover:brightness-110 w-[23vw] h-[25vw] mt-3"/>
                    <div className="bg-gallery-img-7 bg-cover bg-top filter brightness-[0.3] hover:brightness-110 w-[47vw] h-[25vw] mt-3"/>
                    <div className="bg-gallery-img-8 bg-cover bg-top filter brightness-[0.3] hover:brightness-110 w-[23vw] h-[25vw] mt-3"/>
                    <div className="bg-gallery-img-9 bg-cover bg-top filter brightness-[0.3] hover:brightness-110 w-[23vw] h-[25vw] mt-3"/>
                    <div className="bg-gallery-img-10 bg-cover bg-top filter brightness-[0.3] hover:brightness-110 w-[23vw] h-[25vw] mt-3"/>
                </div>
            </div>
        </section>
    )
}

export default Gallery
