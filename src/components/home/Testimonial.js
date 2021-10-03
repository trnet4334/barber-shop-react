import React from "react";

const Testimonial = () => {
    const clientCard = [1, 2, 3, 4].map((index) =>
        <div className="bg-white w-60 h-60 flex flex-col items-center justify-center px-8 text-primary">
            <p className="break-all font-light text-left mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, excepturi.</p>
            <div className="inline-flex mt-3 w-full">
                <div className="bg-black rounded-full w-16 h-16"/>
                <div className="text-left ml-2 flex flex-col justify-center">
                    <p className="font-medium text-lg leading-5">John Doe</p>
                    <p className="text-secondary font-light leading-5">Client</p>
                </div>
            </div>
        </div>
    )

    return (
        <div className="w-full h-auto min-h-screen flex">
            <div
                className="bg-primary w-1/2 flex items-center justify-center"
            >
                <div className="grid grid-cols-2 grid-rows-2 gap-5">
                    {clientCard}
                </div>
            </div>
            <div className="w-1/2 p-16 flex flex-col items-start justify-center bg-secondary">
                <h2 className="text-4xl my-5 text-primary">客戶回饋</h2>
                <p className="w-2/3 break-words text-left my-3.5 text-primary leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus impedit ipsam libero odit quia sit. Assumenda eaque eveniet facere numquam provident quibusdam sed ut vero voluptates? Commodi dicta ipsa rem?</p>
                <button className="text-btn-text bg-btn-primary px-12 py-4 mt-6 hover:ring-2 hover:ring-btn-primary hover:bg-transparent hover:text-secondary">
                    <a href="#">閱讀更多</a>
                </button>
            </div>
        </div>
    )
}

export default Testimonial
