import React, { useEffect } from "react";
import AboutHeader from "../shared/components/about/AboutHeader";
import AboutBody from "../shared/components/about/AboutBody";
import Navbar from "../shared/components/nav/NavBar";
import useLoading from "../shared/hooks/UseLoading";
import LoadingScreen from "../shared/components/loadingscreen/LoadingScreen";

const About = () => {
    useEffect(() => {
        document.title = 'About Us';
    }, []);

    const loading = useLoading(1000);

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div>
                    <Navbar />

                    <div className="pt-5 overflow-hidden">
                        <AboutHeader />
                        <div className="container">
                            <AboutBody />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;
