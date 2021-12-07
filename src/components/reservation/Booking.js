import React from "react";
import {stylists, scheduleService, scheduleTime} from "../../common/pageContent";

const Booking = () => {

  return (
    <div className="flex flex-col w-full text-secondary-mild pt-5">
      <label className="mt-3 block flex items-center justify-start">
        <span className="min-w-[90px] text-left">設計師</span>
        <select
          type="text"
          className="block w-full text-primary rounded-md bg-gray-100 border-transparent focus:border-secondary-dark focus:bg-secondary-light focus:ring-0"
        >
          {stylists.map((item) =>
            <option value={item}>{item}</option>
          )}
        </select>
      </label>
      <label className="mt-3 block flex items-center justify-start">
        <span className="min-w-[90px] text-left">日期</span>
        <input
          type="date"
          className="block w-full text-primary rounded-md bg-gray-100 border-transparent focus:border-secondary-dark focus:bg-secondary-light focus:ring-0"
        />
      </label>
      <label className="mt-3 block flex items-center justify-start">
        <span className="min-w-[90px] text-left">時間</span>
        <select
          className="block w-full text-primary rounded-md bg-gray-100 border-transparent focus:border-secondary-dark focus:bg-secondary-light focus:ring-0"
        >
          {scheduleTime.map((item) =>
            <option value={item.value}>{item.time}</option>
          )}
        </select>
      </label>
      <label className="mt-3 block flex items-center justify-start">
        <span className="min-w-[90px] text-left">服務項目</span>
        <select
          className="block w-full text-primary rounded-md bg-gray-100 border-transparent focus:border-secondary-dark focus:bg-secondary-light focus:ring-0"
        >
          {scheduleService.map((item) =>
            <option value={item.translation}>{item.name}</option>
          )}
        </select>
      </label>
      <label className="mt-3 block flex items-center justify-start">
        <span className="min-w-[90px] text-left">姓名</span>
        <input
          type="text"
          className="block w-full text-primary rounded-md bg-gray-100 border-transparent focus:border-secondary-dark focus:bg-secondary-light focus:ring-0"
        />
      </label>
      <label className="mt-3 block flex items-center justify-start">
        <span className="min-w-[90px] text-left">手機號碼</span>
        <input
          type="text"
          className="block w-full text-primary rounded-md bg-gray-100 border-transparent focus:border-secondary-dark focus:bg-secondary-light focus:ring-0"
        />
      </label>
      <p className="mt-1 mb-3 text-right underline">請務必輸入正確手機號碼，才能收到相關連繫訊息，謝謝！</p>
      <label className="mt-3 block flex items-center justify-start">
        <span className="min-w-[90px] text-left">備註</span>
        <textarea
          rows="5"
          className="block w-full text-primary rounded-md bg-gray-100 border-transparent focus:border-secondary-dark focus:bg-secondary-light focus:ring-0"
        />
      </label>
      {/*<div>reCaptcha</div>*/}
      <button
        className="px-10 py-2.5 w-[150px] m-auto mt-5 text-secondary-mild bg-secondary-dark hover:ring-2 hover:ring-secondary-dark hover:bg-transparent hover:text-secondary-dark">預約
      </button>
    </div>
  )
}

export default Booking
