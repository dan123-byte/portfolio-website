function Projects() {
    const projects = [
        {
            date: "Aug 2023 – Apr 2024",
            title: "CMS & Feedback Acquisition",
            role: "Quality Assurance",
            description:
                "I developed and executed test cases to validate key website features, ensuring they met functional and performance requirements. I performed unit and integration testing to verify module functionality, independence, and seamless collaboration between system components. Additionally, I identified critical bugs and collaborated with developers to implement fixes, improving system stability and reducing post-launch issues.",
            technologies: ["Testing", "Unit Testing", "Integration Testing", "QA"],
        },
        {
            date: "Jun 2024 – Dec 2024",
            title: "Petition Class Information System",
            role: "Quality Assurance",
            description:
                "I developed and executed test cases to validate core website features, including cross-platform, security, and encryption testing, while also conducting UAT to gather feedback on usability and accessibility. Additionally, I led load and stress testing to improve scalability, monitored system uptime to recommend stability improvements, and utilized code quality tools to enhance maintainability for long-term updates.",
            technologies: [
                "UAT",
                "Security Testing",
                "Load Testing",
                "Stress Testing",
            ],
        },
        {
            date: "Jan 2025 – May 2025",
            title: "School Management System",
            role: "Cerebro - IT Intern",
            description:
                "I developed FastAPI endpoints for seamless data integration in a School Management System and enhanced UX/UI in Flutter and Odoo with dynamic profiles, customizable fields, and intuitive interfaces. Additionally, I integrated real-time push notifications using Firebase, built an interactive notification system, designed a Task Manager module with multiple views, and documented progress to support collaboration and maintainability.",
            technologies: ["FastAPI", "Flutter", "Odoo", "Firebase"],
        },
        {
            date: "Sep 2025 – Oct 2025",
            title: "Automobile Product Website",
            role: "Rooche Digital IT Solutions – Full Stack Developer",
            description:
                "I developed a multi-page automobile product website using WordPress, creating key pages such as Home, Products, About Us, Contact Us, and Location, while customizing themes and plugins to ensure a clean layout, intuitive navigation, and easy content management.",
            technologies: ["WordPress", "PHP", "Web Development"],
        },
        {
            date: "Nov 2025 – Jan 2026",
            title: "Internal Admin & Product System",
            role: "Rooche Digital IT Solutions – Full Stack Developer",
            description:
                "I maintained and enhanced internal and product systems, adding over four new features and improving existing functionalities using React on the frontend and Ruby on the backend, while collaborating with the team to troubleshoot issues and optimize overall system performance.",
            technologies: ["React", "Ruby", "REST API", "Full Stack"],
        },
        {
            date: "Jan 2026 – Jul 2026",
            title: "Mobile AR Token Collection Game",
            role: "Rooche Digital IT Solutions – Backend Developer",
            description:
                "I developed and maintained over 30 RESTful API endpoints using Node.js for a location-based AR game, supporting authentication, gameplay, and in-game transactions. I managed PostgreSQL database integration, deployed backend services on Google Cloud Platform (GCP), implemented Redis caching to improve performance, documented APIs using Swagger, performed API testing with Postman, and collaborated with frontend developers to ensure seamless system integration and scalability for 500–1,000 concurrent users.",
            technologies: [
                "Node.js",
                "PostgreSQL",
                "GCP",
                "Redis",
                "Swagger",
                "Postman",
            ],
        },
        {
            date: "Jul 2026 – Sep 2026",
            title: "Call & Email Management System",
            role: "Rooche Digital IT Solutions – Frontend Developer",
            description:
                "I developed and contributed to the migration of a sales outreach platform supporting cold calling, email outreach, lead management, and contact tracking. Built reusable React and TypeScript components, integrated RESTful APIs, resolved UI/API bugs, and collaborated with cross-functional teams to ensure seamless feature validation and performance.",
            technologies: [
                "React",
                "TypeScript",
                "REST API",
                "Frontend Development",
            ],
        },
    ];

    return (
        <section id="projects">
            <div className="container projects-container">

                {/* Section Header */}
                <div className="projects-header">
                    <span className="section-label">SELECTED WORK</span>

                    <h2>Projects</h2>

                    <p>
                        A collection of academic, internship, and professional
                        projects covering software development, quality
                        assurance, backend systems, and frontend development.
                    </p>
                </div>

                {/* Projects */}
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <article
                            className="project-card"
                            key={project.title}
                        >
                            <div className="project-top">
                                <span className="project-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span className="project-date">
                                    {project.date}
                                </span>
                            </div>

                            <div className="project-content">
                                <h3>{project.title}</h3>

                                <p className="project-role">
                                    {project.role}
                                </p>

                                <p className="project-description">
                                    {project.description}
                                </p>

                                <div className="project-technologies">
                                    {project.technologies.map((technology) => (
                                        <span
                                            className="technology-tag"
                                            key={technology}
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Projects;