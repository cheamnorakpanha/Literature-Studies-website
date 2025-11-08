import React, { useEffect } from "react";
import DroversWifeSummary from '../../shared/components/summary/DroversWifeSummary';
import Navbar from "../../shared/components/navBar/NavBar";
import useLoading from "../../shared/hooks/UseLoading";
import LoadingScreen from "../../shared/hooks/LoadingScreen";

function DroversWife() {
    useEffect(() => {
        document.title = "The Drover's Wife - Henry Lawson";
    }, []);

    const loading = useLoading(1000);

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div>
                    <Navbar />

                    <div className="bg-body-tertiary py-4 overflow-hidden">
                        <DroversWifeSummary />
                    </div>
                </div>
            )}
        </div>
    );
}

export default DroversWife;