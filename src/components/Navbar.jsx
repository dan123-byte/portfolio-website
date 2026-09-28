import { useState } from "react";

function Navbar() {
    const [activeSection, setActiveSection] = useState("home-1");

    const handleNavClick = (section) => {
        setActiveSection(section);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top">
            <div className="container">

                {/* Logo */}
                <a
                    className="navbar-brand d-flex align-items-center gap-2"
                    href="#home-1"
                    onClick={() => handleNavClick("home-1")}
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
                                onClick={() =>
                                    handleNavClick("home-1")
                                }
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
                                onClick={() =>
                                    handleNavClick("education")
                                }
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
                                onClick={() =>
                                    handleNavClick("projects")
                                }
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
                                onClick={() =>
                                    handleNavClick("technical-skills")
                                }
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