
import './Dashboard.css';
import './Navigation.css';

import Navigation from "@/components/ui/Navigation.tsx";
import Header from "@/Header.tsx";


function Dashboard() {

    return (
        // <div className="full-page-container flex ">
        //     <div className="container  flex-col fit-content">
        //        {/* <Header></Header>*/}
        //
        //         {/*<Button>Click me</Button>*/}
        //         <Navigation></Navigation>
        //
        //         <main className="flex-1 p-4 space-y-4">
        //             <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        //                 <div className="aspect-video rounded-xl bg-gray-200"></div>
        //                 <div className="aspect-video rounded-xl bg-gray-200"></div>
        //                 <div className="aspect-video rounded-xl bg-gray-200"></div>
        //             </div>
        //             <div className="min-h-[100vh] rounded-xl bg-gray-200"></div>
        //         </main>
        //     </div>
        // </div>

        <div className="h-screen flex full-page-container ">
            {/* Dashboard Section */}
            <div className="w-1/6 bg-gray-200">
                <Navigation/>
            </div>

            {/* Right Section with Header and Main */}
            <div className="flex-1 flex flex-col">
                {/* Header Section */}
                <div className="h-15 bg-gray-300 ml-3 mr-4  mt-5 rounded-2xl">
                    <Header />
                </div>
                {/* Main Content Section */}
                <div className="flex-1 bg-white overflow-y-auto">
                    <main className="flex-1 p-4 space-y-4">
                         <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                         <div className="aspect-video rounded-xl bg-gray-200"></div>
                         <div className="aspect-video rounded-xl bg-gray-200"></div>
                         <div className="aspect-video rounded-xl bg-gray-200"></div>
                         </div>
                         <div className="min-h-[100vh] rounded-xl bg-gray-200"></div>

                    </main>
                </div>
            </div>
        </div>


    );

}

export default Dashboard;