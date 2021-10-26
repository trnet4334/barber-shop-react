import React from "react";
import MemberCard from "../utilities/MemberCard";

const Team = () => {
    const source = [
        { name: 'Ryan Chen', image: 'bg-barber-img-1'},
        { name: 'Steve Hsu', image: 'bg-barber-img-2'},
        { name: 'Kelly Wu', image: 'bg-barber-img-3'},
    ]

    return (
        <div className="w-screen h-auto min-h-screen bg-secondary bg-background-img-2 bg-cover bg-center flex flex-col items-center justify-center py-20">
            <h2 className="text-4xl my-5 text-primary">我們的團隊</h2>
            <p className="text-center w-1/3 m-auto break-words mb-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deleniti eveniet expedita, officia similique voluptas.</p>
            <div className="flex items-center justify-center w-full">
                {source.map((item) =>
                    <MemberCard
                        size="lg"
                        name={item.name}
                        image={item.image}
                    />
                )}
            </div>
        </div>
    )
}

export default Team
