import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DaveUI } from "./DaveUI";

export const DaveHome = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleImageLoad = () => {
            const images = document.querySelectorAll("img");
            let loadedCount = 0;

            const onLoad = () => {
                loadedCount++;
                if (loadedCount === images.length) {
                    setLoading(false);
                }
            };

            if (images.length === 0) {
                setLoading(false);
                return;
            }

            images.forEach((img) => {
                if (img.complete) {
                    onLoad();
                } else {
                    img.addEventListener("load", onLoad);
                    img.addEventListener("error", onLoad);
                }
            });

            return () => {
                images.forEach((img) => {
                    img.removeEventListener("load", onLoad);
                    img.removeEventListener("error", onLoad);
                });
            };
        };

        handleImageLoad();
    }, []);

    return (
        <>
            {loading ? (
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: "100vh" }}
                >
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <DaveUI />
            )}
        </>
    );
};
