import React, { useEffect } from "react";
import ContactForm from "../shared/components/contact/ContactForm";
import Gallery from "../shared/components/contact/Gallery";
import Navbar from "../shared/components/nav/NavBar";
import '../shared/styles/styles.css';
import useLoading from "../shared/hooks/UseLoading";
import LoadingScreen from "../shared/components/loadingscreen/LoadingScreen";

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