import React, { useEffect } from "react";
import DesireesBabySummary from '../shared/components/summary/DesireesBabySummary';
import Navbar from "../shared/components/nav/NavBar";
import UseLoading from "../shared/hooks/UseLoading";
import LoadingScreen from "../shared/components/loadingscreen/LoadingScreen";

function DesireesBaby() {
    useEffect(() => {
        document.title = "Desiree's Baby - Kate Chopin";
    }, []);

    const loading = UseLoading(1000);

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div>
                    <Navbar />

                    <div className="bg-body-tertiary py-4 overflow-hidden">
                        <DesireesBabySummary />
                    </div>
                </div>
            )}
        </div>
    );
}

export default DesireesBaby;