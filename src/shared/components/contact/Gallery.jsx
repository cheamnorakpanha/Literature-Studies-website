import React from "react";
import { motion } from "framer-motion";

// Define variables
const hoverEffect = {
    scale: 1.05,
    transition: { duration: 0.2 },
};

const noHoverEffect = {
    scale: 1,
    transition: { duration: 0.2 },
};

// Define animation properties for the images - easy to edit
const animationProps = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2 }
};

function Gallery() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <motion.img
                        whileHover={hoverEffect}    // Applies the animation from the hoverEffect variable
                        animate={noHoverEffect}     // Applies the animation from the non-hoverEffect variable
                        initial={animationProps.initial}    // Initial animation properties
                        whileInView={animationProps.animate}    // Animate when the image comes into view
                        transition={animationProps.transition}  // Animation transition properties
                        src="https://api.architectuul.org/media/4f525832-0418-40e3-85f1-793b6d7b5f76/1312x.jpg"
                        className="w-100 shadow-1-strong mb-4 bw-image"
                        alt="The institute of Foreign Language"
                    />
                    <motion.img
                        whileHover={hoverEffect}
                        animate={noHoverEffect}
                        initial={animationProps.initial}
                        whileInView={animationProps.animate}
                        transition={animationProps.transition}
                        src="https://api.architectuul.org/media/5138a9e5-9c88-4a08-9602-63556d7b5f76/1312x.jpg"
                        className="w-100 shadow-1-strong mb-4"
                        alt="The institute of Foreign Language"
                    />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <motion.img
                        whileHover={hoverEffect}
                        animate={noHoverEffect}
                        initial={animationProps.initial}
                        whileInView={animationProps.animate}
                        transition={animationProps.transition}
                        src="https://api.architectuul.org/media/4f5258da-940c-4121-a770-7a086d7b5f76/1312x.jpg"
                        className="w-100 shadow-1-strong mb-4 bw-image"
                        alt="The institute of Foreign Language"
                    />
                    <motion.img
                        whileHover={hoverEffect}
                        animate={noHoverEffect}
                        initial={animationProps.initial}
                        whileInView={animationProps.animate}
                        transition={animationProps.transition}
                        src="https://api.architectuul.org/media/5138a9b8-7fd0-432e-8162-64226d7b5f76/1312x.jpg"
                        className="w-100 shadow-1-strong mb-4"
                        alt="The institute of Foreign Language"
                    />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <motion.img
                        whileHover={hoverEffect}
                        animate={noHoverEffect}
                        initial={animationProps.initial}
                        whileInView={animationProps.animate}
                        transition={animationProps.transition}
                        src="https://api.architectuul.org/media/4f523fcd-94d4-45da-85dd-7a086d7b5f76/1312x.jpg"
                        className="w-100 shadow-1-strong mb-4 bw-image"
                        alt="The institute of Foreign Language"
                        height="96%"
                    />
                </div>
            </div>
        </div>
    );
}

export default Gallery;