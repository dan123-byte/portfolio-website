
function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-main">
                {/* Logo */}
                <div className="left-footer">
                    <a href="#home-1" aria-label="Back to home">
                        <img
                            src="/portfolio-website/assets/footer_logo.png"
                            alt="Daniel Tababa Logo"
                            loading="lazy"
                        />
                    </a>
                </div>

                {/* Developer Information */}
                <div className="right-footer">
                    <p className="footer-eyebrow">
                        DEVELOPER PORTFOLIO
                    </p>

                    <h2>Daniel Tababa</h2>

                    <p className="footer-description">
                        Building practical web applications
                        and backend solutions.
                    </p>

                    {/* Social Links */}
                    <div className="footer-socials">
                        <a
                            href="mailto:danielandrei.tababa@gmail.com"
                            aria-label="Email Daniel"
                            title="Email"
                        >
                            <i className="fas fa-envelope"></i>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/daniel-andrei-tababa"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn profile"
                            title="LinkedIn"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>

                        <a
                            href="https://github.com/dan123-byte"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub profile"
                            title="GitHub"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="footer-bottom">
                <p className="footer-copyright">
                    © {new Date().getFullYear()} Daniel Tababa.
                    All rights reserved.
                </p>

                <nav
                    className="footer-nav"
                    aria-label="Footer navigation"
                >
                    <a href="#home-1">Home</a>
                    <a href="#education">Education</a>
                    <a href="#projects">Work Projects</a>
                    <a href="#personal-projects">Personal Projects</a>
                    <a href="#technical-skills">Skills</a>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
