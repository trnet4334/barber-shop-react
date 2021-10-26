import React from "react";

const Booking = () => {
    const stylists = ['Ryan', 'Kelly', 'Steve', 'Mark', 'Tiffany', 'Cindy']
    const scheduleTime = [
        {time: '12:00', value: '12'},
        {time: '13:00', value: '13'},
        {time: '14:00', value: '14'},
        {time: '15:00', value: '15'},
        {time: '16:00', value: '16'},
        {time: '17:00', value: '17'},
        {time: '18:00', value: '18'},
        {time: '19:00', value: '19'},
        {time: '20:00', value: '20'}
    ]
    const service = [
        {name: '造型剪髮', value: 'classic haircut'},
        {name: '學生剪髮', value: 'student haircut'},
        {name: '經典寸頭', value: 'buzz cut'},
        {name: '染髮', value: 'dye'},
        {name: '燙髮', value: 'perm'},
        {name: '頭皮保養', value: 'scalp care'},
        {name: '專業修鬍', value: 'beard trimming'},
    ]

    return (
        <div className="flex flex-col w-full text-btn-text pt-5">
            <label className="block flex items-center justify-start">
                <span className="w-2/5 text-center">設計師</span>
                <select
                    type="text"
                    className="mt-3 block w-full text-primary rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                >
                    {stylists.map((item) =>
                        <option value={item}>{item}</option>
                    )}
                </select>
            </label>
            <label className="block flex items-center justify-start">
                <span className="w-2/5 text-center">日期</span>
                <input
                    type="date"
                    className="mt-3 block w-full text-primary rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                />
            </label>
            <label className="block flex items-center justify-start">
                <span className="w-2/5 text-center">時間</span>
                <select
                    className="mt-3 block w-full text-primary rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                >
                    {scheduleTime.map((item) =>
                        <option value={item.value}>{item.time}</option>
                    )}
                </select>
            </label>
            <label className="block flex items-center justify-start">
                <span className="w-2/5 text-center">服務項目</span>
                <select
                    className="mt-3 block w-full text-primary rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                >
                    {service.map((item) =>
                        <option value={item.value}>{item.name}</option>
                    )}
                </select>
            </label>
            <label className="block flex items-center justify-start">
                <span className="w-2/5 text-center">姓名</span>
                <input
                    type="text"
                    className="mt-3 block w-full text-primary rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                />
            </label>
            <label className="block flex items-center justify-start">
                <span className="w-2/5 text-center">手機號碼</span>
                <input
                    type="text"
                    className="mt-3 block w-full text-primary rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                />
            </label>
            <p className="mt-1 mb-3 text-right underline">請務必輸入正確手機號碼，才能收到相關連繫訊息，謝謝！</p>
            <label className="block flex items-center justify-start">
                <span className="w-2/5 text-center">備註</span>
                <textarea
                    className="mt-3 block w-full text-primary rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                />
            </label>
            <div>reCaptcha</div>
            <button className="px-10 py-2.5 w-[150px] m-auto mt-3 text-btn-text bg-btn-primary hover:ring-2 hover:ring-btn-primary hover:bg-transparent hover:text-secondary">預約</button>
        </div>
    )
}

export default Booking
