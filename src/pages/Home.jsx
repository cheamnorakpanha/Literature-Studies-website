import React, { useEffect } from "react";
import HomeBody from "../shared/components/home/HomeBody";
import Navbar from "../shared/components/nav/NavBar";
import UseLoading from "../shared/hooks/UseLoading";
import LoadingScreen from "../shared/components/loadingscreen/LoadingScreen";

const Home = () => {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    const loading = UseLoading(1000); // 1 seconds loading duration

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div className="pt-5">
                    <Navbar />

                    <div>
                        <HomeBody />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;