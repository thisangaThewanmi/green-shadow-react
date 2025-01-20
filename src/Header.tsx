import {useEffect, useState} from "react";

function Header(){

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval); // Clean up the interval when the component is unmounted
    }, []);

    return (
        <header className="bg-gray-900 text-white rounded-2xl ">
            <div className="container mx-auto flex items-center   ">
                <h1 className="text-2xl font-bold ml-11">Green Shadow</h1>
                {/* Time Display */}
                <div className="text-lg font-normal  ml-[47rem]">
                    <span>{time}</span>
                </div>

                {/* Profile Section */}
                <div className="flex items-center space-x-4 ml-8">
                    <span className="text-lg font-normal">My Profile</span>
                    <i className="fa fa-user-circle-o bg-white" aria-hidden="true"></i>
                    {/*<img*/}
                    {/*    src="https://via.placeholder.com/40" // Replace with actual profile image URL*/}
                    {/*    alt="Profile"*/}
                    {/*    className="rounded-full w-10 h-10"*/}
                    {/*/>*/}
                </div>
            </div>
        </header>
    );


}

export default Header;