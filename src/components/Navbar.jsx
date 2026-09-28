function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top">
            <div className="container">

                <a className="navbar-brand d-flex align-items-center gap-2" href="#home-1">
                    <img
                        src="/portfolio-website/assets/dt_logo.png"
                        alt="Logo"
                        className="navbar-logo"
                        loading="lazy"
                    />
                </a>

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

                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a className="nav-link active" href="#home-1">
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#education">
                                Education
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#projects">
                                Projects
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#technical-skills">
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