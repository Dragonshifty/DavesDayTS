import { useEffect } from "react";
import { Carousel } from "bootstrap";

export const SlideCarousel = () => {
    useEffect(() => {
        const element = document.querySelector("#slider");
        if (element) {
            new Carousel(element, {
                interval: 4500,
                ride: "carousel",
            });
        }
    }, []);

    return (
        <div className="">
            <div className="row">
                <div className="col-12">
                    <div
                        id="slider"
                        className="carousel slide"
                        data-bs-ride="carousel"
                        data-bs-interval="4500"
                    >
                        <div className="carousel-indicators">
                            <button
                                className="active"
                                type="button"
                                data-bs-slide-to="0"
                                data-bs-target="#slider"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-bs-slide-to="1"
                                data-bs-target="#slider"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-bs-slide-to="2"
                                data-bs-target="#slider"
                                aria-label="Slide 3"
                            ></button>
                        </div>
                        <div className="carousel-inner rounded-3 border border-success slider">
                            <div className="carousel-item active">
                                <img
                                    src="/images/slider1.jpg"
                                    className="d-block w-100 rounded-3"
                                    alt=""
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="/images/slider2.jpg"
                                    className="d-block w-100 rounded-3"
                                    alt=""
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="/images/slider3.jpg"
                                    className="d-block w-100 rounded-3"
                                    alt=""
                                />
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#slider"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#slider"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
