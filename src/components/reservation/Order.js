const Order = () => {
    return (
        <div className="flex flex-col w-full">
            <label className="block flex items-center justify-start">
                <span className="w-1/3 text-center">訂單編號</span>
                <input
                    type="text"
                    className="mt-3 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                />
            </label>
            <label className="block flex items-center justify-start">
                <span className="w-1/3 text-center">手機後三碼</span>
                <input
                    type="text"
                    className="mt-3 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                />
            </label>
            <button className="round-md mt-3 py-3 px-8 bg-red-800 text-gray-300">查詢</button>
        </div>
    )
}

export default Order
