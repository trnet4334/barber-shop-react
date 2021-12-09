import React, {useState, useEffect} from 'react';
import MemberCard from "../components/utilities/MemberCard";
import ProgressBar from "../components/utilities/ProgressBar";
import {teamMembers, progressBarValue} from "../common/pageContent";

const Team = () => {
  const [members, setMembers] = useState([])
  const [barValue, setBarValue] = useState([])
  useEffect(() => {
    setMembers([...teamMembers])
    setBarValue([...progressBarValue])
  }, [])

  return (
    <section className="w-full h-auto min-h-screen pt-24 bg-secondary-light">
      <div className="w-full text-primary h-auto py-10 px-10 lg:px-20">
        <h4 className="text-base font-base leading-relaxed text-center text-secondary-dark">Our Team</h4>
        <h1 className="text-4xl mb-12">我們的團隊</h1>
        <div className="flex items-center justify-center flex-wrap">
          {members.map((item) =>
            <MemberCard
              size="md"
              name={item.name}
              image={item.image}
              key={item.memberId}
            />
          )}
        </div>
      </div>
      <div
        className="w-full bg-primary h-auto py-14 px-8 xl:p-20 flex flex-col md:flex-row items-center justify-around text-secondary-mild">
        <div className="mb-5 md:mb-0 md-r:w-1/2 lg-r:w-1/2 xl:w-2/5">
          <h2 className="text-left text-3xl mb-6">有經驗的設計師</h2>
          <p className="text-left font-light break-all mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Ab aspernatur at eius enim facere, hic id non porro tenetur voluptatibus? Consectetur consequatur delectus
            deserunt explicabo!</p>
          {
            barValue.map((item, index) =>
              <ProgressBar
                name={item.name}
                value={item.value}
                width={item.width}
                key={index}
              />
            )
          }
        </div>
        <div
          className=
            "xs-max:w-full xs-max:h-[200px]
            xs-r:w-[80vw] xs-r:h-[225px] xs-r:m-auto
            sm-r:w-[80vw] sm-r:h-[225px] sm-r:m-auto
            md-r:w-[300px]
            lg-r:w-[375px]
            xl:w-[500px] md:h-[500px]
            bg-team-img-1 bg-cover bg-center"
        />
      </div>
      <div className="w-full h-auto p-28 bg-background-img-2 bg-cover bg-secondary-light">
        <h4 className="text-center text-secondary-dark text-base mb-1.5">CAREER</h4>
        <h2 className="text-center text-4xl text-primary mb-20">有興趣加入我們的團隊嗎？</h2>
        <button className="btn-lg hover:bg-transparent">馬上申請</button>
      </div>
    </section>
  )
}

export default Team
