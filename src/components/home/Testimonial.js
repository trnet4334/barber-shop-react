import React, {useState, useEffect} from "react";
import axios from "axios";

const Testimonial = () => {
  // data: user data
  // isError: error status
  const [data, setData] = useState([])
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchUserData = async () => {
      setIsError(false)

      try {
        axios.get('https://reqres.in/api/users?page=2')
          .then((res) => {
              setData(res.data.data.slice(0, 4))
            }
          )
      } catch (error) {
        setIsError(true)
      }
    }

    fetchUserData()
  }, [])

  return (
    <div className="w-full h-auto lg:min-h-screen flex flex-col-reverse lg:flex-row">
      <div
        className="bg-primary w-full py-12 lg:w-1/2 flex items-center justify-center"
      >
        <div className="grid md:grid-cols-2 md:grid-rows-2 gap-5">
          {
            data.map((item, index) =>
              <div className="bg-white w-60 h-60 flex flex-col items-center justify-center px-8 text-primary"
                   key={index}>
                {isError ?
                  <svg className="animate-spin h-10 w-10"/>
                  :
                  <div>
                    <p className="break-all font-light text-left mb-2">Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Cupiditate, excepturi.</p>
                    <div className="inline-flex mt-3 w-full">
                      <div className="rounded-full w-16 h-16 overflow-hidden">
                        <img src={item.avatar} alt="" className="w-full h-full"/>
                      </div>
                      <div className="text-left ml-2 flex flex-col justify-center">
                        <p className="font-medium text-lg leading-5">{item.first_name}</p>
                        <p className="text-secondary-dark font-light leading-5">Client</p>
                      </div>
                    </div>
                  </div>
                }
              </div>
            )
          }
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-16 flex flex-col items-start justify-center bg-secondary-light">
        <h4 className="text-base font-base text-secondary-dark">Customer Feedback</h4>
        <h2 className="text-3xl md:text-4xl mb-5 text-primary">客戶回饋</h2>
        <p className="w-full md:w-2/3 break-words text-left my-3.5 text-primary leading-relaxed">Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Ducimus impedit ipsam libero odit quia sit. Assumenda eaque eveniet facere
          numquam provident quibusdam sed ut vero voluptates? Commodi dicta ipsa rem?</p>
        <button className="btn-lg hover:bg-transparent">
          <a href="#!">閱讀更多</a>
        </button>
      </div>
    </div>
  )
}

export default Testimonial
