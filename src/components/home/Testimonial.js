const Testimonial = () => {
    return (
        <div className="w-full h-4/5 flex">
            <div
                className="bg-gray-300 w-1/2 flex items-center justify-center"
            >
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                    <div className="bg-white w-60 h-60 p-10">
                        <p className="break-all text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, excepturi.</p>
                        <div className="inline-flex mt-3 w-full">
                            <div className="bg-black rounded-full w-12 h-12"/>
                            <div className="text-left ml-2">
                                <p>John Doe</p>
                                <p>Client</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-60 h-60 p-10">
                        <p className="break-all text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, excepturi.</p>
                        <div className="inline-flex mt-3 w-full">
                            <div className="bg-black rounded-full w-12 h-12"/>
                            <div className="text-left ml-2">
                                <p>John Doe</p>
                                <p>Client</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-60 h-60 p-10">
                        <p className="break-all text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, excepturi.</p>
                        <div className="inline-flex mt-3 w-full">
                            <div className="bg-black rounded-full w-12 h-12"/>
                            <div className="text-left ml-2">
                                <p>John Doe</p>
                                <p>Client</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-60 h-60 p-10">
                        <p className="break-all text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, excepturi.</p>
                        <div className="inline-flex mt-3 w-full">
                            <div className="bg-black rounded-full w-12 h-12"/>
                            <div className="text-left ml-2">
                                <p>John Doe</p>
                                <p>Client</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2 p-16 flex flex-col items-start justify-center">
                <h2 className="text-3xl my-5">客戶回饋</h2>
                <p className="w-2/3 break-words text-left my-3.5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus impedit ipsam libero odit quia sit. Assumenda eaque eveniet facere numquam provident quibusdam sed ut vero voluptates? Commodi dicta ipsa rem?</p>
                <button className="bg-red-700 px-12 py-4 rounded-full my-5">
                    <a href="#" className="text-gray-300">閱讀更多</a>
                </button>
            </div>
        </div>
    )
}

export default Testimonial
