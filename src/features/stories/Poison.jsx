import React, { useEffect } from "react";
import PoisonSummary from '../../shared/components/summary/PoisonSummary';
import NavBar from "../../shared/components/navBar/NavBar";
import LoadingScreen from "../../shared/hooks/LoadingScreen";
import useLoading from "../../shared/hooks/UseLoading";

function Poison() {
    useEffect(() => {
        document.title = "Poison - Roald Dahl";
    }, []);

    const loading = useLoading(1000);

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div>
                    <NavBar />

                    <div className="bg-body-tertiary py-4 overflow-hidden">
                        <PoisonSummary />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Poison;