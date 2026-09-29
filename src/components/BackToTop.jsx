import { useEffect, useState } from "react";

function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className={`back-to-top ${visible ? "show" : ""}`}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            ↑
        </button>
    );
}

export default BackToTop;