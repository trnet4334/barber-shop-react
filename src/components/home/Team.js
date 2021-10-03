import React from "react";

const Team = () => {
    return (
        <div className="w-screen h-auto min-h-screen bg-secondary flex flex-col items-center justify-center py-20">
            <h2 className="text-4xl my-5 text-primary">我們的團隊</h2>
            <p className="text-center w-1/3 m-auto break-words mb-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deleniti eveniet expedita, officia similique voluptas.</p>
            <div className="flex items-center justify-center">
                <div className="w-[400px] h-[500px] bg-barber-img-1 bg-cover mx-2.5"/>
                <div className="w-[400px] h-[500px] bg-barber-img-3 bg-cover mx-2.5"/>
                <div className="w-[400px] h-[500px] bg-barber-img-2 bg-cover mx-2.5"/>
            </div>
        </div>
    )
}

export default Team
