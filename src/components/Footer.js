import React, {useState} from "react";
import {Link} from "react-router-dom";
import Modal from "../components/Modal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDataFetched, setIsDataFetched] = useState(true)
  const Title = () => (
    <h3 className="text-3xl font-medium text-primary">
      預約查詢
    </h3>
  )
  const Content = () => (
    <React.Fragment>
      {isDataFetched ?
        <div className="relative px-8 py-3 flex-auto">
          <ul className="leading-[2.5rem] min-w-[250px]">
            <li className="block flex">
              <span className="font-bold">姓名：</span>
              <p>John Doe</p>
            </li>
            <li className="block flex">
              <span className="font-bold">預約時間：</span>
              <p>2021-12-01</p>
            </li>
            <li className="block flex">
              <span className="font-bold">預約設計師：</span>
              <p>Ryan</p>
            </li>
            <li className="block flex">
              <span className="font-bold">預約項目：</span>
              <p>剪髮</p>
            </li>
          </ul>
        </div>
        :
        <div className="relative px-8 py-4 flex-auto">
          <label className="block flex items-center justify-start">
            <span className="w-[125px] text-left">訂單編號</span>
            <input
              type="text"
              className="mt-3 block w-[150px] text-primary rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            />
          </label>
          <label className="block flex items-center justify-start">
            <span className="w-[125px] text-left">手機後三碼</span>
            <input
              type="text"
              className="mt-3 block w-[150px] text-primary rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            />
          </label>
        </div>
      }
    </React.Fragment>

  )
  const Buttons = () => (
    <React.Fragment>
      <button
        className={`${isDataFetched ? 'bg-red-700' : 'bg-green-700'} text-white font-medium uppercase text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-2 mb-1`}
        type="button">
        {isDataFetched ? '取消預約' : '查詢'}
      </button>
      <button
        className="text-primary background-transparent font-medium uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setIsModalOpen(false)}
      >
        關閉
      </button>
    </React.Fragment>
  )

  // Top: window position to the page top
  // Behavior: page scroll style
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <footer className="w-screen h-auto bg-primary flex flex-col justify-between">
      <div className="w-full h-full pt-8 pb-4 flex flex-col md:flex-row items-center justify-center relative font-noto">
        <div
          className="flex flex-col justify-between text-btn-text text-base w-full pl-8 pb-4 md:pl-0 md:w-1/3 lg:w-1/4 md:py-4">
          <div className="flex flex-col items-start mb-5">
                        <span className="font-sati text-5xl cursor-pointer">
                            <Link to="/">Hooray</Link>
                        </span>
            <div className="flex mt-5">
              <i
                className="fab fa-facebook fa-2x cursor-pointer pr-1 hover:fill-current hover:text-secondary hover:transform hover:-translate-y-1.5"/>
              <i
                className="fab fa-instagram fa-2x cursor-pointer px-1 hover:fill-current hover:text-secondary hover:transform hover:-translate-y-1.5"/>
              <i
                className="fab fa-line fa-2x cursor-pointer px-1 hover:fill-current hover:text-secondary hover:transform hover:-translate-y-1.5"/>
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
                  className="no-underline hover:text-secondary"
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
                <a href="mailto:customer@hooray.tw" className="no-underline hover:text-secondary">
                  customer@hooray.tw
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="text-btn-text w-full md:w-1/2 lg:w-2/5">
          <ul
            className="flex justify-center divide-x divide-solid divide-primary w-full my-6 sm:mb-12 m-auto text-left text-sm xs:text-base md:text-xl list-none font-light">
            <li className="cursor-pointer px-1 xs:px-3 hover:text-secondary">
              <Link to="/about" onClick={scrollTop}>品牌介紹</Link>
            </li>
            <li className="cursor-pointer px-1 xs:px-3 hover:text-secondary">
              <Link to="/news" onClick={scrollTop}>最新消息</Link>
            </li>
            <li className="cursor-pointer px-1 xs:px-3 hover:text-secondary">
              <Link to="/team" onClick={scrollTop}>團隊</Link>
            </li>
            <li className="cursor-pointer px-1 xs:px-3 hover:text-secondary">
              <Link to="/gallery" onClick={scrollTop}>作品</Link>
            </li>
            <li
              className="cursor-pointer px-1 xs:px-3 hover:text-secondary"
              onClick={() => setIsModalOpen(true)}
            >
              預約查詢
            </li>
          </ul>
          <div className="inline-block m-auto bg-secondary rounded-full pl-4">
            <input
              id="subscriptions"
              name="subscriptions"
              type="email"
              placeholder="Email Address"
              className="border-0 bg-transparent focus:outline-none text-black w-36 xs:w-48 sm:w-72"
            />
            <button
              className="bg-btn-primary py-2.5 px-3 rounded-tr-full rounded-br-full"
            >
              訂閱
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex items-center justify-center border-t border-gray-600">
        <span className="text-center text-btn-text py-3 font-thin">Copyright © 2021 HOORAY, All right reserved.</span>
      </div>
      {
        isModalOpen &&
        <Modal
          title={<Title/>}
          content={<Content/>}
          buttons={<Buttons/>}
          onClose={() => setIsModalOpen(false)}
        />
      }
    </footer>
  )
}

export default Footer
