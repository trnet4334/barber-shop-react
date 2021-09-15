const Work = () => {
    return (
        <div className="min-h-screen w-screen h-screen bg-black">
            <div className="w-full h-2/3 flex flex-col items-center justify-center">
                <h2 className="text-4xl text-gray-300 py-6">探索我們的工作</h2>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <i className="fas fa-play text-black"/>
                </div>
            </div>
            <div className="w-full h-1/3 inline-flex">
                <div className="h-full w-1/4 bg-gray-500"></div>
                <div className="h-full w-1/4 bg-red-300"></div>
                <div className="h-full w-1/4 bg-gray-500"></div>
                <div className="h-full w-1/4 bg-red-300"></div>
            </div>
        </div>
    )
}

export default Work
