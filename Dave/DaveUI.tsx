import { useState } from "react";
import WorkingDay from "./working/WorkingDay";
import ResultCarrier from "./working/results/ResultCarrier";
import { SlideCarousel } from "./SlideCarousel";
import { MeetTheStaff } from "./MeetTheStaff";
import { Menu } from "./Menu";

export const DaveUI = () => {
    const workingDay: WorkingDay = new WorkingDay();

    const runDay = () => {
        const result: ResultCarrier = workingDay.newDay();
        setDaveText(result.message);
        setDaveScore(result.score);
    };

    const [daveText, setDaveText] = useState(
        "Luigi's Linguine is based on a dream of serving my family's special linguine pasta. Although my family won't give me the recipe, we do serve amazing pizza and cocktails, and we sometimes care about our staff. Click the button to fully simulate a working day for our newest waiter - Dave. Each interaction could either add to or alleviate his stress levels. Will Dave have a good day or a bad day?"
    );
    const [daveScore, setDaveScore] = useState(0);

    return (
        <>
            <header
                className="header py-5 min-vh-100 flex-grow-1"
                style={{
                    minHeight: "1000px",
                    background: `linear-gradient(to bottom right, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(/images/header-background.jpg) center center no-repeat`,
                    backgroundSize: "cover",
                }}
            >
                <div className="container text-center">
                    <div className="">
                        <div className="display-1 satisfy-regular text-success">
                            <h1 className="">Luigi's Linguine</h1>
                        </div>
                        <div>
                            <p className="satisfy-regular text-danger fs-4">
                                You get what you get and you don't get upset!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row mb-5 text-center">
                        <div className="col-12 text-container">
                            <h1 className="display-2 text-white mt-3">
                                How did Dave's day go?
                            </h1>
                            <p className="lead text-white w-75 m-auto mb-4 honour-line-break">
                                {daveText}
                            </p>
                            <p className="lead text-white fw-bold mb-4">
                                Dave's stress score: {daveScore}
                            </p>
                            <button
                                className="btn btn-outline-success"
                                onClick={runDay}
                            >
                                Run the day
                            </button>
                        </div>
                    </div>
                    <SlideCarousel />
                </div>
            </header>
            <MeetTheStaff />
            <Menu />
        </>
    );
};
