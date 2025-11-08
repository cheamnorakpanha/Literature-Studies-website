import React, { useEffect } from "react";
import HomeBody from "./HomeBody";
import Navbar from "../../shared/components/navBar/NavBar";
import UseLoading from "../../shared/hooks/UseLoading";
import LoadingScreen from "../../shared/hooks/LoadingScreen";

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