import React from 'react';

const About = () => {
    return (
        <section className="w-screen h-auto min-h-screen pt-32 md:pt-44 bg-secondary bg-background-img-2 bg-cover text-primary">
            <div className="w-full flex flex-col-reverse md:flex-row justify-around px-8 lg:px-20 pb-10">
                <div
                    className=
                        "xs-max:w-full xs-max:h-[225px]
                        xs-r:w-[80vw] xs-r:h-[300px] xs-r:m-auto
                        sm-r:w-[80vw] sm-r:h-[300px] sm-r:m-auto
                        md-r:w-[300px]
                        lg-r:w-[375px]
                        xl:w-[450px] md:h-[500px]
                        bg-about-img-1 bg-center bg-cover"
                />
                <div className="w-full md-r:w-1/2 lg-r:w-1/2 xl:w-2/5 text-left">
                    <h4 className="text-base font-base text-left text-secondary">Our Story</h4>
                    <h1 className="text-3xl md:text-4xl mb-14">我們的故事</h1>
                    <h4 className="font-medium text-xl">改變生活的理髮品牌</h4>
                    <p className="font-light break-all leading-relaxed my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad alias aliquam amet autem culpa dicta distinctio dolor dolore dolorem doloribus, ducimus eaque expedita fugiat, id, in inventore ipsa ipsam iste laborum magni necessitatibus nemo nesciunt nostrum omnis possimus provident quaerat quasi qui ratione saepe sit sunt tenetur veritatis vitae voluptate voluptatem? At dolor eveniet hic quam quidem quis suscipit!</p>
                    <p className="font-light break-all leading-relaxed my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem iure, maxime officia praesentium quos voluptatem. Deserunt doloribus numquam officiis optio quibusdam soluta voluptate. Amet culpa iusto provident qui repudiandae tempore.</p>
                    <button className="btn-lg hover:bg-transparent hover:text-secondary my-5">閱讀更多</button>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row md:justify-around h-auto px-8 md:px-12 py-10 bg-primary text-btn-text">
                <div className="xs-max:w-full md-r:w-1/2 lg:w-2/5 text-left pb-10 md:pb-0">
                    <h4 className="text-xl font-medium mt-5">NO. 1 Barber shop</h4>
                    <p className="font-light my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis corporis deserunt ducimus eius excepturi in ipsam non quis quod, quos, sunt ullam velit, veritatis voluptatibus. Alias facilis harum placeat.</p>
                    <ul className="mt-12">
                        <li className="flex items-start mb-10">
                            <i className="fas fa-user-tie fa-2x text-secondary mr-3"/>
                            <div>
                                <h5 className="text-lg font-medium mb-3">豐富的經驗</h5>
                                <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium harum id mollitia nam quas quis.</p>
                            </div>
                        </li>
                        <li className="flex items-start mb-10">
                            <i className="fas fa-wallet fa-2x text-secondary mr-3"/>
                            <div>
                                <h5 className="text-lg font-medium mb-3">平實的價格</h5>
                                <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consectetur cum, error eum fuga ipsam quia!</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-shield-alt fa-2x text-secondary mr-3"/>
                            <div>
                                <h5 className="text-lg font-medium mb-3">穩定的品質</h5>
                                <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, fuga illo nisi quidem vitae voluptas.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div
                    className=
                        "xs-max:w-full xs-max:h-[225px]
                        xs-r:w-[80vw] xs-r:h-[250px] xs-r:m-auto
                        sm-r:w-[80vw] sm-r:h-[250px] sm-r:m-auto
                        md-r:w-[300px]
                        lg-r:w-[375px]
                        xl:w-[600px] md:h-[400px]
                        bg-about-img-2 bg-center bg-cover"
                />
            </div>
            <div className="w-full bg-background-img-2 bg-cover bg-center px-6 md-r:px-12 lg-r:px-18 py-12 xl:py-24 xl:px-52">
                <div className="w-full h-[375px] grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-2 gap-2">
                    <div className="md:col-span-2 md:row-span-2 bg-about-img-3 bg-center bg-cover"/>
                    <div className="bg-about-img-4 bg-center bg-cover"/>
                    <div className="md:row-span-2 bg-about-img-6 bg-center bg-cover"/>
                    <div className="bg-about-img-5 bg-center bg-cover"/>
                </div>
            </div>
        </section>
    )
}

export default About
