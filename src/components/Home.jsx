function Home() {
    return (
        <>
            <section id="home-1">
                <div>
                    <img
                        src="/portfolio-website/assets/image_prof.jpg"
                        id="prof_headshot"
                        alt="Professional Headshot"
                        loading="lazy"
                    />
                </div>

                <div>
                    <div>
                        <h1>Daniel Tababa</h1>
                    </div>

                    <div>
                        <p>
                            I am a developer with project-based experience in
                            maintaining systems, developing new features, and
                            building responsive websites. Strong background in
                            full-stack development, API integration, databases,
                            and QA testing.
                        </p>
                    </div>
                </div>
            </section>

            <section id="home-2">
                <div>
                    <ul className="custom-list">
                        <li>
                            Passionate about improving my skills in HTML, CSS,
                            Python, JavaScript and other related technologies
                        </li>

                        <li>
                            Follow current trends and innovations in the
                            console gaming industry
                        </li>

                        <li>
                            Enjoy collecting travel keychains and spending time
                            with family during weekends and vacations.
                        </li>
                    </ul>
                </div>

                <div className="icons">
                    <a
                        href="mailto:danielandrei.tababa@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-link me-3"
                    >
                        <i className="fas fa-envelope fa-lg"></i>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/daniel-andrei-tababa"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-link me-3"
                    >
                        <i className="fab fa-linkedin fa-lg"></i>
                    </a>

                    <a
                        href="https://github.com/dan123-byte"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-link"
                    >
                        <i className="fab fa-github fa-lg"></i>
                    </a>
                </div>
            </section>
        </>
    );
}

export default Home;