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
        <header className="bg-gray-900 text-white">
            <div className="container mx-auto flex items-center  ">
                <h1 className="text-2xl font-bold">ShadCN Header</h1>
                {/* Time Display */}
                <div className="text-lg font-medium magin-left:30px">
                    <span>Time: {time}</span>
                </div>

                {/* Profile Section */}
                <div className="flex items-center space-x-4">
                    <span className="text-lg">My Profile</span>
                    {/* Profile Image */}
                    <img
                        src="https://via.placeholder.com/40" // Replace with actual profile image URL
                        alt="Profile"
                        className="rounded-full w-10 h-10"
                    />
                </div>
            </div>
        </header>
    );


}
export default Header;