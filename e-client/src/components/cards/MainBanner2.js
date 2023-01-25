import React from "react";


const MainBanner2 = () => {
    return (
        <div className="mx-auto container py-12 px-6 xl:px-0 flex justify-center items-center flex-col">
            <div className="flex justify-between bg-[#e8c3d1] items-stretch flex-row">
                <div className="flex items-center bg-[#e8c3d1] justify-center">
                    <p className="transform flex flex-shrink-0 -rotate-90 text-2xl font-semibold tracking-wide leading-normal text-white">50% OFF</p>
                </div>
                <div className="flex justify-center items-start flex-col xl:w-2/5 md:w-5/12 xl:px-7 px-6 md:px-0 md:py-0 py-5">
                    <div>
                        <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">Act before it’s too late!</p>
                    </div>
                    <div className="xl:mt-4 mt-2">
                        <p className="text-base xl:text-xl leading-7 text-gray-600 pr-4">skin that looks modern and is comfortable as well. Avail the 50% offer now.</p>
                    </div>
                </div>
                <div className="hidden md:block bg-[#e8c3d1] h-44 md:h-60 xl:h-72">
                    <img className="hidden h-full xl:block" src="./img/mainban.png" alt="pexels-dmitry-zvolskiy-2082090-1" />
                    <img className="xl:hidden h-full" src="./img/mainban.png" alt="pexels-dmitry-zvolskiy-2082090-1-1" />
                </div>
            </div>
            <div className="md:hidden bg-[#e8c3d1] mt-6 w-full">
                <img src="./img/mainban.png" alt="pexels-dmitry-zvolskiy-2082090-1" className="w-full" />
            </div>
        </div>
    );
};

export default MainBanner2;
