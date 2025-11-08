import React, { useEffect } from "react";
import StoryOfAnHourSummary from '../../shared/components/summary/StoryOfAnHourSummary';
import NavBar from "../../shared/components/navBar/NavBar";
import LoadingScreen from "../../shared/hooks/LoadingScreen";
import useLoading from "../../shared/hooks/UseLoading";

function StoryOfAnHour() {
    useEffect(() => {
        document.title = "The Story of an Hour - Kate Chopin";
    }, []);

    const loading = useLoading(1000);

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div>
                    <NavBar />

                    <div className="bg-body-tertiary py-4 overflow-hidden">
                        <StoryOfAnHourSummary />
                    </div>
                </div>
            )}
        </div>
    );
}

export default StoryOfAnHour;