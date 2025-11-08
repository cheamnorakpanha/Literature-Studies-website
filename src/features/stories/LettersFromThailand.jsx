import React, { useEffect } from "react";
import LettersFromThailandSummary from '../../shared/components/summary/LettersFromThailandSummary';
import Navbar from "../../shared/components/navBar/NavBar";
import useLoading from "../../shared/hooks/UseLoading";
import LoadingScreen from "../../shared/hooks/LoadingScreen";

function LettersFromThailand() {
    useEffect(() => {
        document.title = "Letters from Thailand - Botan";
    }, []);

    const loading = useLoading(1000);

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div>
                    <Navbar />

                    <div className="bg-body-tertiary py-4 overflow-hidden">
                        <LettersFromThailandSummary />
                    </div>
                </div>
            )}
        </div>
    );
}

export default LettersFromThailand;