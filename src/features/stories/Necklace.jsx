import React, { useEffect } from "react";
import NecklaceSummary from '../../shared/components/summary/NecklaceSummary';
import Navbar from "../../shared/components/navBar/NavBar";
import useLoading from "../../shared/hooks/UseLoading";
import LoadingScreen from "../../shared/hooks/LoadingScreen";

function Necklace() {
    useEffect(() => {
        document.title = "The Necklace - Guy de Maupassant";
    }, []);

    const loading = useLoading(1000);

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div>
                    <Navbar />

                    <div className="bg-body-tertiary py-4 overflow-hidden">
                        <NecklaceSummary />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Necklace;