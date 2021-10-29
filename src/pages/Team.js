import React, { useState, useEffect } from 'react';
import MemberCard from "../components/utilities/MemberCard";
import ProgressBar from "../components/utilities/ProgressBar";
import { teamMembers, progressBarValue } from "../common/pageContent";

const Team = () => {
    const [ members, setMembers ] = useState([])
    const [ barValue, setBarValue ] = useState([])
    useEffect(() => {
        setMembers([...teamMembers])
        setBarValue([...progressBarValue])
    }, [])

    return (
        <section className="w-full h-auto min-h-screen pt-24 bg-secondary">
            <div className="w-full text-primary h-auto py-10 px-20">
                <h1 className="text-4xl mb-12">我們的團隊</h1>
                <div className="flex items-center justify-center flex-wrap">
                    {members.map((item) =>
                        <MemberCard
                            size="md"
                            name={item.name}
                            image={item.image}
                            key={item.memberId}
                        />
                    )}
                </div>
            </div>
            <div className="w-full bg-primary h-auto p-20 flex items-center justify-around text-btn-text">
                <div className="w-2/5">
                    <h2 className="text-left text-3xl mb-6">有經驗的設計師</h2>
                    <p className="text-left font-light break-all mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur at eius enim facere, hic id non porro tenetur voluptatibus? Consectetur consequatur delectus deserunt explicabo!</p>
                    {
                        barValue.map((item, index) =>
                            <ProgressBar
                                name={item.name}
                                value={item.value}
                                width={item.width}
                                key={index}
                            />
                        )
                    }
                </div>
                <div className="w-[500px] h-[500px] bg-team-img-1 bg-cover"/>
            </div>
            <div className="w-full h-auto p-28 bg-background-img-2 bg-cover bg-secondary">
                <h4 className="text-center text-secondary text-base mb-1.5">CAREER</h4>
                <h2 className="text-center text-4xl text-primary mb-20">有興趣加入我們的團隊嗎？</h2>
                <button className="btn-lg hover:bg-transparent">馬上申請</button>
            </div>
        </section>
    )
}

export default Team
