import React, { useEffect } from "react";
import NotPoorJustBrokeSummary from '../shared/components/summary/NotPoorJustBrokeSummary';
import NavBar from "../shared/components/nav/NavBar";
import useLoading from "../shared/hooks/UseLoading";
import LoadingScreen from "../shared/components/loadingscreen/LoadingScreen";

function NotPoorJust() {
    useEffect(() => {
        document.title = "Not Poor, Just Broke - Dick Gregory";
    }, []);

    const loading = useLoading(1000);

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div>
                    <NavBar />

                    <div className="bg-body-tertiary py-4 overflow-hidden">
                        <NotPoorJustBrokeSummary />
                    </div>
                </div>
            )}
        </div>
    );
}

export default NotPoorJust;