import { useEffect, useState } from "react";

function Navbar() {
    const [activeSection, setActiveSection] = useState("home-1");

    useEffect(() => {
        const sections = document.querySelectorAll(
            "#home-1, #education, #projects, #technical-skills"
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-30% 0px -60% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top">
            <div className="container">

                {/* Logo */}
                <a
                    className="navbar-brand d-flex align-items-center gap-2"
                    href="#home-1"
                >
                    <img
                        src="/portfolio-website/assets/dt_logo.png"
                        alt="Logo"
                        className="navbar-logo"
                    />
                </a>

                {/* Mobile Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation */}
                <div
                    className="collapse navbar-collapse"
                    id="mainNavbar"
                >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a
                                className={`nav-link ${
                                    activeSection === "home-1"
                                        ? "active"
                                        : ""
                                }`}
                                href="#home-1"
                            >
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className={`nav-link ${
                                    activeSection === "education"
                                        ? "active"
                                        : ""
                                }`}
                                href="#education"
                            >
                                Education
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className={`nav-link ${
                                    activeSection === "projects"
                                        ? "active"
                                        : ""
                                }`}
                                href="#projects"
                            >
                                Projects
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className={`nav-link ${
                                    activeSection === "technical-skills"
                                        ? "active"
                                        : ""
                                }`}
                                href="#technical-skills"
                            >
                                Skills
                            </a>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
