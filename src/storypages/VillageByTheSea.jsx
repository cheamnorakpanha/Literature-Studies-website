import React, { useEffect } from "react";
import VillageByTheSeaSummary from '../shared/components/summary/VillageByTheSeaSummary';
import NavBar from "../shared/components/nav/NavBar";
import useLoading from "../shared/hooks/UseLoading";
import LoadingScreen from "../shared/hooks/UseLoading";

function VillageByTheSea() {
    useEffect(() => {
        document.title = "The Village by the Sea - Anita Desai";
    }, []);

    const loading = useLoading(1000);

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div>
                    <NavBar />

                    <div className="bg-body-tertiary py-4 overflow-hidden">
                        <VillageByTheSeaSummary />
                    </div>
                </div>
            )}
        </div>
    );
}

export default VillageByTheSea;