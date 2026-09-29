import { useEffect, useState } from "react";

function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const documentHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const scrollProgress =
                documentHeight > 0
                    ? (scrollTop / documentHeight) * 100
                    : 0;

            setProgress(scrollProgress);
        };

        window.addEventListener("scroll", updateProgress);

        updateProgress();

        return () => {
            window.removeEventListener("scroll", updateProgress);
        };
    }, []);

    return (
        <div className="scroll-progress-container">
            <div
                className="scroll-progress-bar"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
}

export default ScrollProgress;