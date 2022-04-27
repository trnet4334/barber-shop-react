import React, {useRef, useState} from "react";
import {Link} from "react-router-dom";
import Modal from "./utilities/Modal";
import Toast from "./utilities/Toast";
import {scrollTop} from "../common/pageScroll";
import {nanoid} from "nanoid";
import {db} from "../common/firebase";
import dayjs from "dayjs";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isOrderCancelled, setIsOrderCancelled] = useState(false)
  const [isDataFetched, setIsDataFetched] = useState(false)
  const [isOrderExist, setIsOrderExist] = useState(false)
  const [searchBtnAvailable, setSearchBtnAvailable] = useState(true)
  const [isFieldValid, setIsFieldValid] = useState(true)
  const [searchResult, setSearchResult] = useState([])
  const [cancelNotification, setCancelNotification] = useState(false)
  const orderIdRef = useRef('')
  const phoneNumRef = useRef('')
  const emailRef = useRef('')

  // Fetch data with selected order ID and phone number
  const handleOrderSearch = async (event) => {
    event.preventDefault();
    const data = []
    const id = orderIdRef.current.value.toString().trim().toUpperCase()
    const phoneNum = phoneNumRef.current.value.toString().trim()

    // Check if input is blank.
    const isBlank = (str) => {
      return (!str || /^\s*$/.test(str))
    }
    // Check if mobile number is valid
    const isMobileValid = (str) => {
      return /^09[0-9]{8}$/.test(str)
    }

    if (!isBlank(id) && !isBlank(phoneNum)) {
      if (isMobileValid(phoneNum)) {
        const snapshot = await db.collection('reservations')
          .where('orderID', '==', id)
          .where('phoneNum', '==', phoneNum)
          .get()
        await snapshot.forEach(doc => data.push({id: doc.id, data: doc.data()}))
        await setIsDataFetched(true)
      } else {
        setIsFieldValid(false)
      }

      if (data.length > 0) {
        setSearchResult(data)
        setIsOrderExist(true)
      }
    } else {
      window.alert('請完成所有欄位填寫。')
    }
  }

  // Submit email subscription request
  const handleSubscriptionRequest = async (event) => {
    event.preventDefault()
    let id = nanoid(12)
    let email = emailRef.current.value.toString().trim()

    // Check if email address is valid
    const isEmailValid = (str) => {
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str)
    }
    if (isEmailValid(email)) {
      try {
        await db.collection('subscriptions').doc(id).set({email: email})
        await window.location.reload()
      } catch (error) {
        console.log(error)
      }
    } else {
      window.alert('請輸入正確的電子郵件')
    }
  }

  // Update reservation with selected id
  const handleCancelOrder = async (event) => {
    event.preventDefault()
    let result = window.confirm('確定取消這次預約嗎？')
    try {
      if (result) {
        await db.collection('reservations')
          .doc(searchResult[0].id.toString())
          .update({
            orderStatus: 'Cancelled'
          })
        await setCancelNotification(true)
        await setIsOrderCancelled(true)
        setTimeout(() => {
          setCancelNotification(false)
        }, 4000)
        setTimeout(() => {
          setIsModalOpen(false)
          window.location.reload()
        }, 6000)
      }
    } catch (err) {
      console.log(err)
    }
  }

  setTimeout(() => {
    setSearchBtnAvailable(false)
  }, 2500)

  const Title = () => (
    <h3 className="text-3xl font-medium text-primary">
      預約查詢
    </h3>
  )
  const Content = (props) => (
    <React.Fragment>
      {!isDataFetched ?
        <div className="relative px-8 py-4 flex-auto">
          <label className="block flex items-center justify-start">
            <span className="w-[125px] text-left">訂單編號</span>
            <input
              type="text"
              name="orderID"
              ref={orderIdRef}
              required
              className="mt-3 block w-[150px] text-primary rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            />
          </label>
          <label className="block flex items-center justify-start">
            <span className="w-[125px] text-left">手機號碼</span>
            <input
              type="text"
              name="phoneNum"
              ref={phoneNumRef}
              required
              className="mt-3 block w-[150px] text-primary rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            />
          </label>
          <span
            className={`${isFieldValid ? 'hidden' : 'w-full text-right text-sm text-red-900 ml-24'}`}>請輸入正確的手機號碼</span>
        </div>
        :
        isOrderExist ?
          <div className="relative px-8 py-3 flex-auto">
            <ul className="leading-[2.5rem] min-w-[250px]">
              <li className="block flex">
                <span className="font-bold">姓名：</span>
                <p>{props.info.data.name}</p>
              </li>
              <li className="block flex">
                <span className="font-bold">預約編號：</span>
                <p>{props.info.data.orderID}</p>
              </li>
              <li className="block flex">
                <span className="font-bold">預約時間：</span>
                <p>{dayjs.unix(props.info.data.reservedDate.seconds).format('YYYY/MM/DD HH:mm')}</p>
              </li>
              <li className="block flex">
                <span className="font-bold">預約設計師：</span>
                <p>{props.info.data.stylists}</p>
              </li>
              <li className="block flex">
                <span className="font-bold">預約項目：</span>
                <p>{props.info.data.service}</p>
              </li>
            </ul>
          </div>
          :
          <div className="relative px-8 py-3 flex-auto">
            <div className="min-w-[250px] min-h-[100px] flex flex-col justify-center">
              <p className="text-2xl text-center font-bold">查無預約記錄</p>
            </div>
          </div>
      }
    </React.Fragment>
  )
  const Buttons = () => {
    return (
      <React.Fragment>
        <button
          className={`${!isDataFetched && !isOrderExist ?
            'bg-green-700 text-white font-medium uppercase text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-2 mb-1 disabled:opacity-50'
            : 'hidden'}`}
          type="button"
          onClick={handleOrderSearch}
          disabled={searchBtnAvailable}
        >
          查詢
        </button>
        <button
          className={`${isDataFetched && isOrderExist ?
            'bg-red-700 text-white font-medium uppercase text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-2 mb-1 disabled:opacity-50'
            : 'hidden'}`}
          type="button"
          onClick={handleCancelOrder}
          disabled={isOrderCancelled}
        >
          取消預約
        </button>
        <button
          className="text-primary background-transparent font-medium uppercase px-4 py-1.5
                     border-[0.1px] rounded border-primary text-sm outline-none
                     focus:outline-none mr-1 mb-1 hover:bg-primary hover:text-secondary-light"
          type="button"
          onClick={() => {
            setIsModalOpen(false)
            setIsDataFetched(false)
            setIsOrderExist(false)
            setSearchBtnAvailable(true)
            setIsFieldValid(true)
            setSearchResult([])
          }}
        >
          關閉
        </button>
      </React.Fragment>
    )
  }

  const ToastContent = () => {
    return (
      <div className="pb-3 bg-green-500 rounded-b-lg break-words text-white flex items-center justify-center">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle"
             className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 512 512">
          <path fill="currentColor"
                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"/>
        </svg>
        <p className="text-base font-noto">成功取消預約</p>
      </div>
    )
  }

  return (
    <footer className="w-screen h-auto bg-primary flex flex-col justify-between">
      <div className="w-full h-full pt-8 pb-4 flex flex-col md:flex-row items-center justify-center relative font-noto">
        <div
          className="flex flex-col justify-between text-secondary-mild text-base w-full pl-8 pb-4 md:pl-0 md:w-1/3 lg:w-1/4 md:py-4">
          <div className="flex flex-col items-start mb-5">
            <span className="font-sati text-5xl cursor-pointer">
              <Link to="/" onClick={scrollTop}>Hooray</Link>
            </span>
            <div className="flex mt-5">
              <i
                className="fab fa-facebook fa-2x cursor-pointer pr-1 hover:fill-current hover:text-secondary-dark hover:transform hover:-translate-y-1.5"/>
              <i
                className="fab fa-instagram fa-2x cursor-pointer px-1 hover:fill-current hover:text-secondary-dark hover:transform hover:-translate-y-1.5"/>
              <i
                className="fab fa-line fa-2x cursor-pointer px-1 hover:fill-current hover:text-secondary-dark hover:transform hover:-translate-y-1.5"/>
            </div>
          </div>
          <ul className="flex flex-col items-start mt-2 leading-relaxed font-light">
            <li className="inline-block">
              <i className="fas fa-map-marker mr-2"/>
              <span>
                <a
                  href="https://goo.gl/maps/yPkxiKtsQvrjLbcK6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:text-secondary-dark"
                >
                  台北市中山路四段999巷3號6樓
                </a>
              </span>
            </li>
            <li className="inline-block">
              <i className="fas fa-phone-square-alt mr-2"/>
              <span>02-22200000</span>
            </li>
            <li className="inline-block">
              <i className="far fa-clock mr-2"/>
              <span>09.00 AM - 17.00 PM</span>
            </li>
            <li className="inline-block">
              <i className="far fa-envelope mr-2"/>
              <span>
                <a href="mailto:customer@hooray.tw" className="no-underline hover:text-secondary-dark">
                  customer@hooray.tw
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="text-secondary-mild w-full md:w-1/2 lg:w-2/5">
          <ul
            className="flex justify-center divide-x divide-solid divide-secondary-light w-full my-6 sm:mb-12 m-auto text-left text-sm xs:text-base md:text-xl list-none font-light">
            <li className="cursor-pointer px-1 xs:px-3 hover:text-secondary-dark">
              <Link to="/about" onClick={scrollTop}>品牌介紹</Link>
            </li>
            <li className="cursor-pointer px-1 xs:px-3 hover:text-secondary-dark">
              <Link to="/news" onClick={scrollTop}>最新消息</Link>
            </li>
            <li className="cursor-pointer px-1 xs:px-3 hover:text-secondary-dark">
              <Link to="/team" onClick={scrollTop}>團隊</Link>
            </li>
            <li className="cursor-pointer px-1 xs:px-3 hover:text-secondary-dark">
              <Link to="/gallery" onClick={scrollTop}>作品</Link>
            </li>
            <li
              className="cursor-pointer px-1 xs:px-3 hover:text-secondary-dark"
              onClick={() => setIsModalOpen(true)}
            >
              預約查詢
            </li>
          </ul>
          <div className="inline-block m-auto bg-secondary-light rounded-full pl-4">
            <input
              ref={emailRef}
              id="subscriptions"
              name="subscriptions"
              type="email"
              placeholder="Email Address"
              className="border-0 bg-transparent focus:outline-none text-black w-36 xs:w-48 sm:w-72"
            />
            <button
              className="bg-secondary-dark py-2.5 px-3 rounded-tr-full rounded-br-full opacity-75 hover:opacity-100"
              onClick={handleSubscriptionRequest}
            >
              訂閱
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex items-center justify-center border-t border-gray-600">
        <span
          className="text-center text-secondary-mild py-3 font-thin">Copyright © 2021 HOORAY, All right reserved.</span>
      </div>
      {
        isModalOpen &&
        <Modal
          title={<Title/>}
          content={<Content info={searchResult[0]}/>}
          buttons={<Buttons/>}
          onClose={() => {
            setIsModalOpen(false)
            setIsDataFetched(false)
            setIsOrderExist(false)
            setSearchBtnAvailable(true)
            setIsFieldValid(true)
            setSearchResult([])
          }}
        />
      }
      {
        cancelNotification &&
        <Toast
          color="bg-green-500"
          content={<ToastContent/>}
          onClose={() => {
            setCancelNotification(false)
          }}
        />
      }
    </footer>
  )
}

export default Footer
