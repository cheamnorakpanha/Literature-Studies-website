import { useMemo } from "react";

const UseAnimations = () => {
    const slideLeft = useMemo(() => ({
        initial: { opacity: 0, x: 200 },
        animate: { opacity: 1, x: 0 }
    }), []);

    const slideRight = {
        initial: { opacity: 0, x: -200 },
        animate: { opacity: 1, x: 0 }
    };

    const fadeUp = useMemo(() => ({
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 1 },
        viewport: { once: true }
    }), []);

    return {slideLeft, slideRight, fadeUp};
};

export default UseAnimations;