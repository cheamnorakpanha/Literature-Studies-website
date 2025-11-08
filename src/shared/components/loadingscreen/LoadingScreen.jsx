import React from "react";
import RingLoader from "react-spinners/RingLoader";
import { motion } from "framer-motion";

const LoadingScreen = ({ loading }) => {
    return (
        <motion.div
            initial={{ y: 0 }} // Start in place
            animate={{ y: loading ? 0 : -2000 }} // Slide up when loading is false
            transition={{
                duration: 1, // Duration of the slide-up animation
                ease: "easeInOut",
                delay: loading ? 0 : 0.7, // add delay before slide-up
            }}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', // Takes the full height of the viewport
            }}>
            <RingLoader
                color="#000"
                cssOverride={{}}
                loading="true"
                size={50}
                speedMultiplier={1}
            />
        </motion.div>
    );
};

export default LoadingScreen;
