import React from "react";
function Widget() {
    return (
        <>
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded py-5 pl-6 flex items-start shadow">
                    <div className="text-gray-700 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dashboard" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={13} r={2} />
                            <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />
                            <path d="M6.4 20a9 9 0 1 1 11.2 0Z" />
                        </svg>
                    </div>
                    <div className="pl-3 pr-10 mt-1">
                        <h3 className="font-normal leading-4 text-gray-800 dark:text-gray-100 text-base">Profit Earned</h3>
                        <div className="flex items-end mt-4">
                            <h2 className="text-indigo-700 dark:text-indigo-600 text-2xl leading-normal font-bold">2,330</h2>
                            <p className="ml-2 mb-1 text-sm text-gray-600 dark:text-gray-400">from 2,125</p>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trending-up" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="3 17 9 11 13 15 21 7" />
                                    <polyline points="14 7 21 7 21 14" />
                                </svg>
                            </div>
                            <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">7.2% Increase</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded py-5 pl-6 flex items-start shadow">
                    <div className="text-gray-700 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dashboard" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={13} r={2} />
                            <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />
                            <path d="M6.4 20a9 9 0 1 1 11.2 0Z" />
                        </svg>
                    </div>
                    <div className="pl-3 pr-10 mt-1">
                        <h3 className="font-normal leading-4 text-gray-800 dark:text-gray-100 text-base">Average Click Rate</h3>
                        <div className="flex items-end mt-4">
                            <h2 className="text-indigo-700 dark:text-indigo-600 text-2xl leading-normal font-bold">22.3%</h2>
                            <p className="ml-2 mb-1 text-sm text-gray-600 dark:text-gray-400">from 21.2%</p>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trending-up" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="3 17 9 11 13 15 21 7" />
                                    <polyline points="14 7 21 7 21 14" />
                                </svg>
                            </div>
                            <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">7.2% Increase</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded py-5 pl-6 flex items-start shadow">
                    <div className="text-gray-700 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dashboard" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={13} r={2} />
                            <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />
                            <path d="M6.4 20a9 9 0 1 1 11.2 0Z" />
                        </svg>
                    </div>
                    <div className="pl-3 pr-10 mt-1">
                        <h3 className="font-normal leading-4 text-gray-800 dark:text-gray-100 text-base">Total Sales</h3>
                        <div className="flex items-end mt-4">
                            <h2 className="text-indigo-700 dark:text-indigo-600 text-2xl leading-normal font-bold">2,330</h2>
                            <p className="ml-2 mb-1 text-sm text-gray-600 dark:text-gray-400">from 2,850</p>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="text-red-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trending-down" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="3 7 9 13 13 9 21 17" />
                                    <polyline points="21 10 21 17 14 17" />
                                </svg>
                            </div>
                            <p className="text-red-400 text-xs tracking-wide font-bold leading-normal pl-1">3.5% Decrease</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded py-5 pl-6 flex items-start shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dashboard text-gray-700 dark:text-gray-400" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={12} cy={13} r={2} />
                        <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />
                        <path d="M6.4 20a9 9 0 1 1 11.2 0Z" />
                    </svg>
                    <div className="pl-3 pr-10 mt-1">
                        <h3 className="font-normal leading-4 text-gray-800 dark:text-gray-100 text-base">Profit Earned</h3>
                        <div className="flex items-end mt-4">
                            <h2 className="text-indigo-700 dark:text-indigo-600 text-2xl leading-normal font-bold">$1200</h2>
                            <p className="ml-2 mb-1 text-sm text-gray-600 dark:text-gray-400">from $800</p>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trending-up" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="3 17 9 11 13 15 21 7" />
                                    <polyline points="14 7 21 7 21 14" />
                                </svg>
                            </div>
                            <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">7.2% Increase</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Card code block end */}
        </>
    );
}
export default Widget;
