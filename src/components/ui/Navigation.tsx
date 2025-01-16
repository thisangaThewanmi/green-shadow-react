


function Navigation() {
    return (
        <div className="nav-card h-[96%]  mt-3 ml-2 bg-gray-800 flex items-center justify-center rounded-3xl">
            <div className="space-y-4 w-full max-w-xs text-center rounded">
                <h1 className="text-black text-xl font-bold">Dashboard</h1>
                <hr className="border-gray-700"/>




                        {/* Home Button */}
                        <button
                            className="nav-button flex items-center justify-center space-x-2 w-[90%]  py-3 rounded bg-white hover:bg-gray-600 ml-2"

                            id="home-link"
                        >
                            <i className="fas fa-home"></i>
                            <span>Home</span>
                        </button>

                        {/* Field Button */}
                        <button
                            className="nav-button flex items-center justify-center space-x-2  w-[90%] py-3 rounded bg-white hover:bg-gray-600 ml-2"
                            id="field-link"
                        >
                            <i className="fas fa-seedling"></i>
                            <span>Field</span>
                        </button>

                        {/* Crop Button */}
                        <button
                            className="nav-button flex items-center justify-center space-x-2 w-[90%]  py-3 rounded bg-gray-700 hover:bg-gray-600 ml-2"
                            id="crop-link"
                        >
                            <i className="fas fa-leaf"></i>
                            <span>Crop</span>
                        </button>

                        {/* Log Button */}
                        <button
                            className="nav-button flex items-center justify-center space-x-2  w-[90%] py-3 rounded bg-gray-700 hover:bg-gray-600 ml-2"
                            id="log-link"
                        >
                            <i className="fas fa-book"></i>
                            <span>Log</span>
                        </button>

                        {/* Vehicle Button */}
                        <button
                            className="nav-button flex items-center justify-center space-x-2 w-[90%] py-3 rounded bg-gray-700 hover:bg-gray-600 ml-2"
                            id="vehicle-link"
                        >
                            <i className="fas fa-truck"></i>
                            <span>Vehicle</span>
                        </button>

                        {/* Equipment Button */}
                        <button
                            className="nav-button flex items-center justify-center space-x-2 w-[90%] py-3 rounded bg-gray-700 hover:bg-gray-600 ml-2"
                            id="equipment-link"
                        >
                            <i className="fas fa-tools"></i>
                            <span>Equipment</span>
                        </button>

                        {/* Staff Button */}
                        <button
                            className="nav-button flex items-center justify-center space-x-2 w-[90%] py-3 rounded bg-gray-700 hover:bg-gray-600 ml-2"
                            id="staff-link"
                        >
                            <i className="fas fa-users"></i>
                            <span>Staff</span>
                        </button>

                        {/* Logout Button */}
                        <button
                            className="nav-button flex items-center justify-center space-x-2 w-[90%] py-3 rounded bg-red-600 hover:bg-red-500 ml-2"
                            id="logout-link"
                        >
                            <i className="fas fa-sign-out-alt"></i>
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
                );
                }

                export default Navigation;
