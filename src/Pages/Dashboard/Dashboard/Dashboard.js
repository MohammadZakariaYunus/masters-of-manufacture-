import React from 'react';
// import './Dashboard.css'

const Dashboard = () => {
    return (
        <div>
            <div class="w-1/6 py-4 px-2 text-gray-700 bg-gray-900 text-left capitalize font-medium shadow-lg">
                <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                    alt="alt placeholder" class="w-8 h-8 mx-auto mb-5 " />
                <span class="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
                    <i class="w-8 fas fa-stream p-2 bg-gray-800 rounded-full">
                    </i>
                    <span class="mx-2">categories</span>
                </span>
                <span class="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
                    <i class="w-8 fas fa-search p-2 bg-gray-800 rounded-full">
                    </i>
                    <span class="mx-2">search</span>
                </span>
                <span class="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
                    <span class="w-8 mb-5 relative">
                        <i class="w-8 fas fa-user p-2 bg-gray-800 rounded-full">
                        </i>
                        <span
                            class="absolute right-0 top-0 -mt-2 -mr-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full">3</span>
                    </span>
                    <span class="mx-2">sign ups</span>
                </span>
                <span class="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
                    <i class="w-8 fas fa-th p-2 bg-gray-800 rounded-full">
                    </i>
                    <span class="mx-2">menu</span>
                </span>
                <span class="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
                    <i class="w-8 fas fa-calendar-alt p-2 bg-gray-800 rounded-full">
                    </i>
                    <span class="mx-2">calendar</span>
                </span>
            </div>
        </div>
    );
};

export default Dashboard;