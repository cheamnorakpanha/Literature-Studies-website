import React, { useEffect } from "react";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import Navbar from "../../shared/components/navBar/NavBar";
import useLoading from "../../shared/hooks/UseLoading";
import LoadingScreen from "../../shared/hooks/LoadingScreen";

export default function NoPage() {
    useEffect(() => {
        document.title = '404 Page';
    }, []);

    const loading = useLoading(1000);

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div>
                    <Navbar />

                    <NoPageComponent />
                </div>
            )}
        </div>
    );
}

function NoPageComponent() {
    return (
        <div style={{ marginTop: '20rem' }}>
            <div className="page-wrap d-flex flex-row align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <span className="display-1 d-block">404</span>
                            <div className="mb-4 lead">
                                <ReactTyped
                                    strings={["The page you are looking for was not found."]}
                                    typeSpeed={40}
                                />
                            </div>
                            <Link to={"/home"} className="text-bg-dark px-4 py-2 fs-6 border-0 text-decoration-none">Back to Homepage</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}