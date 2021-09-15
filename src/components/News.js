const News = () => {
    const post = ['Lorem ipsum dolor sit amet. 2021/5/15', 'Lorem ipsum dolor sit amet. 2021/5/15', 'Lorem ipsum dolor sit amet. 2021/5/15', 'Lorem ipsum dolor sit amet. 2021/5/15', 'Lorem ipsum dolor sit amet. 2021/5/15']
    const posts = post.map((item, index) => (
        <li key={index} className="leading-loose text-xl">{item}</li>
    ))
    return (
        <div className="grid grid-cols-2">
            <div>
                <h2 className="font-bold text-3xl py-3.5">最新文章</h2>
                <ul className="list-none py-5">
                    {posts}
                </ul>
            </div>
            <div>
                <h2 className="font-bold text-3xl py-3.5">優惠活動</h2>
                <div className="grid grid-cols-2 grid-rows-2">
                    <div>
                        <div className="w-60 h-32 bg-black"/>
                        <p className="break-words text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eum porro possimus provident reiciendis sed?</p>
                    </div>
                    <div>
                        <div className="w-60 h-32 bg-black"/>
                        <p className="break-words text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cumque provident tenetur vitae. Itaque, quis.</p>
                    </div>
                    <div>
                        <div className="w-60 h-32 bg-black"/>
                        <p className="break-words text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta iure natus placeat? Autem, ex, quos.</p>
                    </div>
                    <div>
                        <div className="w-60 h-32 bg-black"/>
                        <p className="break-words text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque necessitatibus quas reiciendis sunt vero, voluptas.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
