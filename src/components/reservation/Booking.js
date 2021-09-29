const Booking = () => {
    return (
        <div className="flex flex-col w-1/2">
            <label className="block flex items-center justify-start">
                <span className="w-1/6 text-left">設計師</span>
                <select
                    type="text"
                    className="mt-3 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                </select>
            </label>
            <label className="block flex items-center justify-start">
                <span className="w-1/6 text-left">日期</span>
                <input
                    type="date"
                    className="mt-3 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                />
            </label>
            <label className="block flex items-center justify-start">
                <span className="w-1/6 text-left">時間</span>
                <select
                    className="mt-3 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                >
                    <option value="1">10:00</option>
                    <option value="2">11:00</option>
                    <option value="3">12:00</option>
                    <option value="4">13:00</option>
                    <option value="5">14:00</option>
                </select>
            </label>
            <label className="block flex items-center justify-start">
                <span className="w-1/6 text-left">服務項目</span>
                <select
                    className="mt-3 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </label>
            <label className="block flex items-center justify-start">
                <span className="w-1/6 text-left">姓名</span>
                <input
                    type="text"
                    className="mt-3 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                />
            </label>
            <label className="block flex items-center justify-start">
                <span className="w-1/6 text-left">手機號碼</span>
                <input
                    type="text"
                    className="mt-3 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                />
            </label>
            <p className="mt-3">請務必輸入正確手機號碼，才能收到相關連繫訊息，謝謝！</p>
            <label className="block flex items-center justify-start">
                <span className="w-1/6 text-left">備註</span>
                <textarea
                    className="mt-3 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                />
            </label>
            <div>reCaptcha</div>
            <div className="flex flex-col">
                <button className="round-md py-3 px-8 bg-red-800 text-gray-300">預約</button>
                <p>每次每時段僅限預約一人</p>
            </div>
        </div>
    )
}

export default Booking
