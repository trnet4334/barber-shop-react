import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-screen bg-black z-10 h-20 flex items-center pr-4 pl-4 font-noto fixed">
        <ul className="flex items-center text-base w-5/12 mx-4 justify-end h-full text-gray-300">
            <li className="mx-5 hover:text-red-700 cursor-pointer">品牌介紹</li>
            <li className="mx-5 hover:text-red-700 cursor-pointer">團隊</li>
        </ul>
        <div className="w-1/12 text-gray-300">
            <Link to="/">
                <span className="text-4xl font-sati">Hooray</span>
            </Link>
        </div>
        <ul className="flex items-center text-base w-5/12 mx-4 h-full text-gray-300">
            <li className="mx-5 hover:text-red-700 cursor-pointer">部落格</li>
            <li className="mx-5 hover:text-red-700 cursor-pointer">作品</li>
            <li className="mx-5">
                <Link to="/reservation" className="bg-red-700 rounded-3xl h-10 px-5 py-3 hover:bg-red-900">線上預約</Link>
            </li>
        </ul>
    </div>
  );
};

export default Navbar;
