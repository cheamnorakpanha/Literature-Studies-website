import React from "react";
import { motion } from "framer-motion";
import UseAnimations from "../../hooks/UseAnimations";

const AboutHeader = () => {

    const { slideLeft } = UseAnimations();

    return (
        <div className="container" style={{ marginTop: '3rem' }}>
            <div className="row justify-content-center text-center mb-2 mb-lg-4">
                <div className="col-lg-8 col-xxl-7">
                    <motion.h2
                        {...slideLeft}
                        className="display-5 fw-bold mb-3"
                        transition={{ duration: 0.4, ease: "easeInOut" }}>About Us
                    </motion.h2>
                </div>
            </div>
        </div>
    );
};
export default AboutHeader;