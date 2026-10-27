
import { useState } from "react";

const personalProjects = [
    {
        title: "TinkrTech — E-commerce Store",
        image: "/portfolio-website/assets/e-commerce.PNG",
        description:
            "A frontend e-commerce web application for browsing and purchasing tech accessories through a modern, retro-inspired storefront. It features a product catalog, shopping cart management, checkout form, and order confirmation experience.",
        technologies: ["React", "JavaScript", "HTML", "CSS", "Vite", "Browser Local Storage"],
        github: "https://github.com/dan123-byte/e-commerce-page",
        demo: "https://dan123-byte.github.io/e-commerce-page/",
    },
    {
        title: "Job Application Tracker",
        image: "/portfolio-website/assets/job-tracker.PNG",
        description:
            "A frontend web application for organizing, tracking, and managing job applications in one place.",
        technologies: ["React", "Vite", "JavaScript", "HTML", "CSS"],
        github: "https://github.com/dan123-byte/job-application-tracker",
        demo: "https://dan123-byte.github.io/job-application-tracker/",
    },
    {
        title: "GrowthSpur Landing Page",
        image: "/portfolio-website/assets/growth-spur.PNG",
        description:
            "A fast, responsive, and data-driven lead-generation landing page.",
        technologies: ["HTML", "JavaScript", "CSS"],
        github: "https://github.com/dan123-byte/marketing-landing-page",
        demo: "https://dan123-byte.github.io/marketing-landing-page/",
    },
];

function PersonalProjects() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const project = personalProjects[currentIndex];

    function previousProject() {
        setCurrentIndex((currentIndex - 1 + personalProjects.length) % personalProjects.length);
    }

    function nextProject() {
        setCurrentIndex((currentIndex + 1) % personalProjects.length);
    }

    return (
        <section id="personal-projects">
            <div className="personal-projects-container">
                <div className="personal-projects-heading">
                    <span className="section-label">MORE OF MY WORK</span>
                    <h2>Personal Projects</h2>
                    <p>
                        A collection of personal projects where I explore
                        ideas, build applications, and improve my development skills.
                    </p>
                </div>

                <article className="personal-project-card" key={project.title}>
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="personal-project-image"
                        aria-label={`Open ${project.title} live demo`}
                    >
                        <img
                            src={project.image}
                            alt={`${project.title} website screenshot`}
                            loading="lazy"
                            onError={(event) => {
                                console.error("Screenshot could not load:", project.image);
                                event.currentTarget.style.visibility = "hidden";
                            }}
                        />
                        <span className="project-image-hint">
                            <i className="fas fa-arrow-up-right-from-square"></i>
                            View Live Site
                        </span>
                    </a>

                    <div className="personal-project-top">
                        <div className="project-folder">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            >
                                <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            </svg>
                        </div>

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="project-github-link"
                            aria-label={`View ${project.title} on GitHub`}
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </div>

                    <h3>{project.title}</h3>

                    <p className="personal-project-description">
                        {project.description}
                    </p>

                    <div className="personal-project-tech">
                        {project.technologies.map((tech) => (
                            <span key={tech}>{tech}</span>
                        ))}
                    </div>

                    <div className="personal-project-links">
                        <a href={project.github} target="_blank" rel="noreferrer">
                            <i className="fab fa-github"></i>
                            Source Code
                        </a>

                        <a href={project.demo} target="_blank" rel="noreferrer">
                            Live Demo
                            <i className="fas fa-arrow-up-right-from-square"></i>
                        </a>
                    </div>
                </article>

                <div className="personal-project-navigation">
                    <button
                        type="button"
                        onClick={previousProject}
                        aria-label="Previous project"
                    >
                        <i className="fas fa-arrow-left"></i>
                        Previous
                    </button>

                    <div className="project-pagination">
                        {personalProjects.map((item, index) => (
                            <button
                                type="button"
                                key={item.title}
                                className={`project-dot ${index === currentIndex ? "active" : ""}`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Show project ${index + 1}: ${item.title}`}
                                aria-current={index === currentIndex ? "true" : undefined}
                            />
                        ))}
                        <span>
                            {currentIndex + 1} / {personalProjects.length}
                        </span>
                    </div>

                    <button
                        type="button"
                        onClick={nextProject}
                        aria-label="Next project"
                    >
                        Next
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>

                <div className="personal-projects-footer">
                    <a
                        href="https://github.com/dan123-byte?tab=repositories"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Explore More on GitHub
                        <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default PersonalProjects;
