import React, { useRef, useState } from "react";
import dayjs from "dayjs";
import Modal from "../utilities/Modal";
import {db} from "../../common/firebase";
import firebase from 'firebase/compat/app';
import {nanoid} from "nanoid";
import {stylists, scheduleService, scheduleTime} from "../../common/pageContent";

const Booking = () => {
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [confirmationInfo, setConfirmationInfo] = useState({
    id: '',
    date: ''
  })
  const stylistRef = useRef('')
  const dateRef = useRef(dayjs())
  const timeRef = useRef('')
  const serviceRef = useRef('')
  const nameRef = useRef('')
  const phoneNumRef = useRef('')
  const commentRef = useRef('')

  const handleReservationSubmit = async (event) => {
    event.preventDefault()
    const fullDate = new Date(`${dateRef.current.value} ${timeRef.current.value}:00:00`)
    // Check if selected date is valid
    function isDateIsValid(date) {
      const diff = dayjs(date).diff(new Date(), 'day', true)
      return diff > 3 && diff <= 90
    }
    // Check if the input is blank.
    function isInputBlank(str) {
      return (!str || /^\s*$/.test(str))
    }
    // Check if the mobile number is valid
    const isMobileValid = (str) => {
      return /^09[0-9]{8}$/.test(str)
    }

    const formVal = {
      createdTime: firebase.firestore.Timestamp.fromDate(new Date()),
      orderID: nanoid(8).toUpperCase(),
      orderStatus: 'Confirmed',
      stylists: stylistRef.current.value,
      reservedDate: firebase.firestore.Timestamp.fromDate(fullDate),
      service: serviceRef.current.value,
      name: nameRef.current.value.toString().trim(),
      phoneNum: phoneNumRef.current.value.toString().trim(),
      comment: commentRef.current.value.toString().trim()
    }

    try {
      if (!isDateIsValid(fullDate)) window.alert('請重新選擇適當的日期！')
      if (!isMobileValid(formVal.phoneNum)) window.alert('請確認手機號碼是否正確！')
      if (!isInputBlank(formVal.name) && !isInputBlank(formVal.phoneNum)) {
        let id = nanoid(16)
        await db.collection('reservations').doc(id).set(formVal)
        await setConfirmationInfo({id: formVal.orderID, date: fullDate.toString()})
        await setIsModalOpen(true)
      } else {
        window.alert('請完成所有打*的欄位再送出！')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const Title = () => (
    <h3 className="text-3xl font-medium text-primary">
      預約完成
    </h3>
  )

  // TODO: styling
  const Content = () => (
    <div>
      <span>{confirmationInfo.id}</span>
      <span>{confirmationInfo.date}</span>
    </div>
  )

  return (
    <React.Fragment>
      <form
        onSubmit={handleReservationSubmit}
        className="flex flex-col w-full text-secondary-mild pt-5"
      >
        <label className="mt-3 block flex items-center justify-start">
          <span className="min-w-[100px] text-left">設計師*</span>
          <select
            type="text"
            ref={stylistRef}
            className="block w-full text-primary rounded-md bg-gray-100 border-transparent focus:border-secondary-dark focus:bg-secondary-light focus:ring-0"
          >
            {stylists.map((item, index) =>
              <option
                value={item}
                key={item + index}
              >
                {item}
              </option>
            )}
          </select>
        </label>
        <label className="mt-3 block flex items-center justify-start">
          <span className="min-w-[100px] text-left">日期*</span>
          <input
            type="date"
            ref={dateRef}
            className="block w-full text-primary rounded-md bg-gray-100 border-transparent focus:border-secondary-dark focus:bg-secondary-light focus:ring-0"
          />
        </label>
        <p className="mt-1 mb-2.5 text-right underline">僅接受3日後且90天內預約，請注意所選日期。</p>
        <label className="mt-3 block flex items-center justify-start">
          <span className="min-w-[100px] text-left">時間*</span>
          <select
            ref={timeRef}
            className="block w-full text-primary rounded-md bg-gray-100 border-transparent focus:border-secondary-dark focus:bg-secondary-light focus:ring-0"
          >
            {scheduleTime.map((item) =>
              <option
                value={item.value}
                key={item.value}
              >
                {item.time}
              </option>
            )}
          </select>
        </label>
        <label className="mt-3 block flex items-center justify-start">
          <span className="min-w-[100px] text-left">服務項目*</span>
          <select
            ref={serviceRef}
            className="block w-full text-primary rounded-md bg-gray-100 border-transparent focus:border-secondary-dark focus:bg-secondary-light focus:ring-0"
          >
            {scheduleService.map((item) =>
              <option
                value={item.name}
                key={item.translation + item.price}
              >
                {item.name}
              </option>
            )}
          </select>
        </label>
        <label className="mt-3 block flex items-center justify-start">
          <span className="min-w-[100px] text-left">姓名*</span>
          <input
            type="text"
            ref={nameRef}
            className="block w-full text-primary rounded-md bg-gray-100 border-transparent focus:border-secondary-dark focus:bg-secondary-light focus:ring-0"
          />
        </label>
        <label className="mt-3 block flex items-center justify-start">
          <span className="min-w-[100px] text-left">手機號碼*</span>
          <input
            type="text"
            ref={phoneNumRef}
            className="block w-full text-primary rounded-md bg-gray-100 border-transparent focus:border-secondary-dark focus:bg-secondary-light focus:ring-0"
          />
        </label>
        <p className="mt-1 mb-2.5 text-right underline">請務必輸入正確手機號碼，才能收到相關連繫訊息，謝謝！</p>
        <label className="mt-3 block flex items-center justify-start">
          <span className="min-w-[100px] text-left">備註</span>
          <textarea
            rows="5"
            ref={commentRef}
            className="block w-full text-primary rounded-md bg-gray-100 border-transparent focus:border-secondary-dark focus:bg-secondary-light focus:ring-0"
          />
        </label>
        {/*<div>reCaptcha</div>*/}
        <button
          className="px-10 py-2.5 w-[150px] m-auto mt-5 text-secondary-mild bg-secondary-dark hover:ring-2 hover:ring-secondary-dark hover:bg-transparent hover:text-secondary-dark"
        >
          預約
        </button>
      </form>
      {
        isModalOpen &&
          <Modal
            title={<Title/>}
            content={<Content/>}
            onClose={() => {
              setIsModalOpen(false)
              window.location.reload()
            }}
          />
      }
    </React.Fragment>
  )
}

export default Booking
