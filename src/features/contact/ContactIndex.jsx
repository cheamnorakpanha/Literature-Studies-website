import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import Gallery from "./Gallery";
import Navbar from "../../shared/components/navBar/NavBar";
import '../../shared/styles/style.css';
import useLoading from "../../shared/hooks/UseLoading";
import LoadingScreen from "../../shared/hooks/LoadingScreen";

const Contact = () => {
    useEffect(() => {
        document.title = 'Contact Us';
    }, []);

    const loading = useLoading(1000);

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div>
                    <Navbar />

                    <div className="pt-5 overflow-hidden">
                        <ContactForm />

                        <div className="my-5">
                            <Gallery />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;