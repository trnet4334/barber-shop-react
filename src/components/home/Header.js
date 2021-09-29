const Header = () => {
  return (
    <header className="relative w-screen flex" style={{height: '120vh'}}>
      <div className="h-full w-7/12 bg-black pt-48 px-24">
        <h2 className="text-4xl text-gray-300 font-semibold font-sati text-left mb-6">Welcome to Hooray</h2>
        <p className="text-left text-gray-300 leading-relaxed mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque blanditiis laudantium nihil numquam pariatur perspiciatis quam quibusdam, ullam ut?</p>
        <div className="flex items-start">
          <button className="px-6 py-3.5 text-gray-300 bg-red-800 rounded-full mr-8">閱讀更多</button>
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <i className="fas fa-play text-black"/>
          </div>
        </div>
      </div>
      <div className="h-full w-5/12 flex flex-col justify-center items-center">
        <div className="w-3/5 h-80 bg-black mb-10"></div>
        <div className="w-full h-60 bg-blue-400 -left-3.5 transform -translate-x-48 flex">
          <div className="w-3/5 h-full px-8 py-6">
              <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias deleniti est laudantium quas quibusdam quis sed ut? Fugit?</p>
              <p className="text-left underline mt-6">開始預約</p>
          </div>
          <div className="w-2/5 h-full bg-black right-0 z-10"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
