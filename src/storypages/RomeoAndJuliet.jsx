import React, { useEffect } from "react";
import RomeoAndJulietSummary from '../shared/components/summary/RomeoAndJulietSummary';
import NavBar from "../shared/components/nav/NavBar";
import UseLoading from "../shared/hooks/UseLoading";
import LoadingScreen from "../shared/components/loadingscreen/LoadingScreen";

function RomeoAndJuliet() {
    useEffect(() => {
        document.title = "Romeo and Juliet - William Shakespeare";
    }, []);

    const loading = UseLoading(1200);   

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div>
                    <NavBar />

                    <div className="bg-body-tertiary py-4 overflow-hidden">
                        <RomeoAndJulietSummary />
                    </div>
                </div>
            )}
        </div>
    );
}

export default RomeoAndJuliet;