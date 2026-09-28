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
        setStartIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const previousCards = () => {
        setStartIndex(
            (prevIndex) =>
                (prevIndex - 1 + cards.length) % cards.length
        );
    };

    return (
        <section id="education">

            <div className="education-container">

                {/* Section Header */}
                <div className="education-header">
                    <span className="section-label">
                        ACADEMIC JOURNEY
                    </span>

                    <h2>Education</h2>

                    <p>
                        My academic journey from elementary school
                        through my Information Technology degree.
                    </p>
                </div>

                {/* Education Cards */}
                <div className="education-carousel">

                    <div className="education-cards">

                        {visibleCards.map((card, index) => (
                            <article
                                className="education-card"
                                key={`${card.title}-${index}`}
                            >

                                <div className="education-image">
                                    <img
                                        src={card.img}
                                        alt={card.title}
                                        loading="lazy"
                                    />

                                    <div className="education-number">
                                        {String(
                                            (startIndex + index) %
                                                cards.length +
                                                1
                                        ).padStart(2, "0")}
                                    </div>
                                </div>

                                <div className="education-content">

                                    <span className="education-level">
                                        {card.title}
                                    </span>

                                    <h3>
                                        {card.subtitle}
                                    </h3>

                                    <div className="education-line"></div>

                                </div>

                            </article>
                        ))}

                    </div>

                    {/* Controls */}
                    <div className="education-controls">

                        <button
                            type="button"
                            className="education-arrow"
                            onClick={previousCards}
                            aria-label="Previous education"
                        >
                            ←
                        </button>

                        <div className="education-progress">
                            <span>
                                {String(startIndex + 1).padStart(2, "0")}
                            </span>

                            <div className="progress-line">
                                <div
                                    className="progress-fill"
                                    style={{
                                        width: `${
                                            ((startIndex + 1) /
                                                cards.length) *
                                            100
                                        }%`,
                                    }}
                                ></div>
                            </div>

                            <span>
                                {String(cards.length).padStart(2, "0")}
                            </span>
                        </div>

                        <button
                            type="button"
                            className="education-arrow"
                            onClick={nextCards}
                            aria-label="Next education"
                        >
                            →
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Education;
