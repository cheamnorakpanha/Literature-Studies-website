import React, { useEffect } from "react";
import HappyPrinceSummary from '../shared/components/summary/HappyPrinceSummary';
import NavBar from "../shared/components/nav/NavBar";
import useLoading from "../shared/hooks/UseLoading";
import LoadingScreen from "../shared/components/loadingscreen/LoadingScreen";

function HappyPrince() {
    useEffect(() => {
        document.title = "The Happy Prince - Oscar Wilde";
    }, []);

    const loading = useLoading(1000);

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div>
                    <NavBar />

                    <div className="bg-body-tertiary py-4 overflow-hidden">
                        <HappyPrinceSummary />
                    </div>
                </div>
            )}
        </div>
    );
}

export default HappyPrince;