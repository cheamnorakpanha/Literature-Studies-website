import { useState, useEffect } from "react";

const useLoading = (duration = 5000) => { // Default duration is 5000ms
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, duration);

        // Cleanup function to clear the timer if the component is unmounted
        return () => clearTimeout(timer);
    }, [duration]);

    return loading;
};

export default useLoading;
