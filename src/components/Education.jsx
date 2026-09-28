import { useState } from "react";

function Education() {
    const cards = [
        {
            img: "/portfolio-website/assets/esps.jpg",
            title: "Elementary School",
            subtitle: "Espiritu Santo Parochial School",
        },
        {
            img: "/portfolio-website/assets/ust_js.jpg",
            title: "Junior High School",
            subtitle: "UST - Junior High School",
        },
        {
            img: "/portfolio-website/assets/ust_shs.jpg",
            title: "Senior High School",
            subtitle: "UST - Senior High School",
        },
        {
            img: "/portfolio-website/assets/ust_cics.jpg",
            title: "College",
            subtitle: "UST - CICS",
        },
    ];

    const [startIndex, setStartIndex] = useState(0);

    const visibleCards = Array.from({ length: 3 }, (_, i) => {
        return cards[(startIndex + i) % cards.length];
    });

    const nextCards = () => {
        setStartIndex((startIndex + 1) % cards.length);
    };

    const previousCards = () => {
        setStartIndex(
            (startIndex - 1 + cards.length) % cards.length
        );
    };

    return (
        <section id="education">

            <div className="container">

                {/* Section Title */}
                <div className="text-center mb-4">
                    <h2>Education</h2>
                </div>

                {/* Education Cards */}
                <div id="educationCarousel">
                    <div className="row">

                        {visibleCards.map((card, index) => (
                            <div
                                className="col-md-4 mb-3"
                                key={`${card.title}-${index}`}
                            >
                                <div className="card text-center h-100">

                                    <img
                                        src={card.img}
                                        className="card-img-top"
                                        alt={card.title}
                                        loading="lazy"
                                    />

                                    <div className="card-body">

                                        <h5 className="card-title">
                                            {card.title}
                                        </h5>

                                        <h6 className="card-subtitle mb-2 text-muted">
                                            {card.subtitle}
                                        </h6>

                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>

                    {/* Carousel Controls */}
                    <div className="d-flex justify-content-center gap-3 mt-3">

                        <button
                            id="prevBtn"
                            type="button"
                            className="btn btn-primary"
                            onClick={previousCards}
                        >
                            Previous
                        </button>

                        <button
                            id="nextBtn"
                            type="button"
                            className="btn btn-primary"
                            onClick={nextCards}
                        >
                            Next
                        </button>

                    </div>
                </div>

            </div>

        </section>
    );
}

export default Education;