import { FaHome } from "react-icons/fa";


const Nav = () => {
    return (
        <div className="px-6  m-10 rounded-md bg-[#F4F5F5] drop-shadow-2xl">
            <div className="w-full h-full flex flex-row items-center">
                <h1 className="m-3 cursor-pointer"><a href="">
                    <FaHome />
                </a></h1>
                <h1 className="m-3 text-lg font-bold cursor-pointer link">about</h1>
                <h1 className="m-3 text-lg font-bold cursor-pointer link text-[#1F01B9]"><a href="https://givebutter.com/laptops-for-stem-students-y64rsa">donate</a></h1>

            </div>

        </div>
    )
}

export default Nav