import React, { useEffect } from "react";
import AboutHeader from "./AboutHeader";
import AboutBody from "./AboutBody";
import Navbar from "../../shared/components/navBar/NavBar";
import useLoading from "../../shared/hooks/UseLoading";
import LoadingScreen from "../../shared/hooks/LoadingScreen";

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
