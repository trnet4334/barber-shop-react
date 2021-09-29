const Pricing = () => {
    const services = [
        {
            name: '造型剪髮',
            price: 700
        },
        {
            name: '學生剪髮（憑學生證）',
            price: 550
        },
        {
            name: '經典寸頭',
            price: 400
        },
        {
            name: '染髮',
            price: 1600
        },
        {
            name: '燙髮',
            price: 1600
        },
        {
            name: '頭皮保養',
            price: 1000
        },
        {
            name: '專業修鬍',
            price: 300
        }
    ]
    const serviceItems = services.map((service, index) =>
        <li key={index} className="text-xl leading-loose px-2 odd:bg-gray-300">{service.name}  {service.price}</li>
    )

    return (
        <div className="grid grid-cols-2 w-screen h-auto font-noto py-7">
            <div className="px-6">
                <h2 className="text-3xl my-5">服務項目</h2>
                <i className="fas fa-cut fa-2x"/>
                <p className="break-words">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda
                    cumque distinctio ducimus error eveniet fuga ipsum magnam minus nemo, numquam
                    odit rerum saepe. Animi!</p>
                <button className="rounded-3xl text-gray-200 bg-red-700 px-4 py-2.5">閱讀更多</button>
            </div>
            <ul className="list-none text-left w-full">
                {serviceItems}
            </ul>
        </div>
    )
}

export default Pricing
