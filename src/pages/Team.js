import React from 'react';
import MemberCard from "../components/utilities/MemberCard";

const Team = () => {
    const source = [
        { name: 'Ryan Chen', image: 'bg-barber-img-1'},
        { name: 'Steve Hsu', image: 'bg-barber-img-2'},
        { name: 'Kelly Wu', image: 'bg-barber-img-3'},
        { name: 'Mark Lin', image: 'bg-barber-img-4'},
        { name: 'Tiffany Chiu', image: 'bg-barber-img-5'},
        { name: 'Cindy Wang', image: 'bg-barber-img-6'},
    ]

    return (
        <section className="w-full h-auto min-h-screen pt-24 bg-secondary">
            <div className="w-full text-primary h-auto py-10 px-20">
                <h1 className="text-4xl mb-12">我們的團隊</h1>
                <div className="flex items-center justify-center flex-wrap">
                    {source.map((item) =>
                        <MemberCard
                            size="md"
                            name={item.name}
                            image={item.image}
                        />
                    )}
                </div>
            </div>
            <div className="w-full bg-primary h-auto p-20 flex items-center justify-around text-btn-text">
                <div className="w-2/5">
                    <h2 className="text-left text-3xl mb-6">有經驗的設計師</h2>
                    <p className="text-left font-light break-all mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur at eius enim facere, hic id non porro tenetur voluptatibus? Consectetur consequatur delectus deserunt explicabo!</p>
                    <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                            <div>
                                <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-btn-text">
                                    髮型設計
                                </span>
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-btn-text">
                                    90%
                                </span>
                            </div>
                        </div>
                        <div className="overflow-hidden h-1 mb-4 text-xs flex rounded bg-secondary">
                            <div className="w-[90%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-btn-primary"/>
                        </div>
                    </div>
                    <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                            <div>
                                <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-btn-text">
                                    修剪技術
                                </span>
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-btn-text">
                                    95%
                                </span>
                            </div>
                        </div>
                        <div className="overflow-hidden h-1 mb-4 text-xs flex rounded bg-secondary">
                            <div className="w-[95%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-btn-primary"/>
                        </div>
                    </div>
                    <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                            <div>
                                <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-btn-text">
                                    修鬍造型設計
                                </span>
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-btn-text">
                                    85%
                                </span>
                            </div>
                        </div>
                        <div className="overflow-hidden h-1 mb-4 text-xs flex rounded bg-secondary">
                            <div className="w-[85%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-btn-primary"/>
                        </div>
                    </div>
                    <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                            <div>
                                <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-btn-text">
                                    頭皮按摩/養護
                                </span>
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-btn-text">
                                    90%
                                </span>
                            </div>
                        </div>
                        <div className="overflow-hidden h-1 mb-4 text-xs flex rounded bg-secondary">
                            <div className="w-[90%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-btn-primary"/>
                        </div>
                    </div>
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
