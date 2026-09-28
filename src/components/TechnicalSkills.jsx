import { useState } from "react";

function TechnicalSkills() {
    const skills = {
        "Development Tools": [
            {
                name: "VS Code",
                image: "/portfolio-website/assets/icons/vs.png",
            },
            {
                name: "Android Studio",
                image: "/portfolio-website/assets/icons/as.png",
            },
        ],

        "Programming Languages": [
            {
                name: "Python",
                image: "/portfolio-website/assets/icons/py.png",
            },
            {
                name: "SQL",
                image: "/portfolio-website/assets/icons/sql.png",
            },
            {
                name: "JavaScript",
                image: "/portfolio-website/assets/icons/js.png",
            },
            {
                name: "HTML",
                image: "/portfolio-website/assets/icons/html.png",
            },
            {
                name: "CSS",
                image: "/portfolio-website/assets/icons/css.png",
            },
            {
                name: "XML",
                image: "/portfolio-website/assets/icons/xml.png",
            },
            {
                name: "Ruby",
                image: "/portfolio-website/assets/icons/ruby.png",
            },
        ],

        Frameworks: [
            {
                name: "Flutter",
                image: "/portfolio-website/assets/icons/flutter.png",
            },
            {
                name: "FastAPI",
                image: "/portfolio-website/assets/icons/fa.png",
            },
            {
                name: "Odoo",
                image: "/portfolio-website/assets/icons/odoo.png",
            },
            {
                name: "React",
                image: "/portfolio-website/assets/icons/react.png",
            },
            {
                name: "Node.js",
                image: "/portfolio-website/assets/icons/nodejs.png",
            },
            {
                name: "WordPress",
                image: "/portfolio-website/assets/icons/wp.png",
            },
        ],

        "Cloud & Server": [
            {
                name: "Google Cloud Platform",
                image: "/portfolio-website/assets/icons/gcp.png",
            },
            {
                name: "Google Cloud Storage",
                image: "/portfolio-website/assets/icons/gcs.png",
            },
            {
                name: "Redis",
                image: "/portfolio-website/assets/icons/redis.png",
            },
        ],

        "API Development": [
            {
                name: "REST API",
                image: "/portfolio-website/assets/icons/restapi.png",
            },
            {
                name: "Swagger",
                image: "/portfolio-website/assets/icons/swagger.png",
            },
            {
                name: "JSON",
                image: "/portfolio-website/assets/icons/json.png",
            },
        ],

        Databases: [
            {
                name: "PostgreSQL",
                image: "/portfolio-website/assets/icons/postgresql.png",
            },
            {
                name: "Firebase",
                image: "/portfolio-website/assets/icons/fb.png",
            },
        ],

        "Version Control": [
            {
                name: "Git",
                image: "/portfolio-website/assets/icons/git.png",
            },
            {
                name: "GitHub",
                image: "/portfolio-website/assets/icons/github.png",
            },
        ],

        "CI/CD": [
            {
                name: "GitHub Actions",
                image: "/portfolio-website/assets/icons/github-actions.png",
            },
        ],

        "Testing & Monitoring": [
            {
                name: "Jest",
                image: "/portfolio-website/assets/icons/jest.png",
            },
            {
                name: "Apache JMeter",
                image: "/portfolio-website/assets/icons/apache.png",
            },
            {
                name: "k6",
                image: "/portfolio-website/assets/icons/k6.png",
            },
            {
                name: "sqlmap",
                image: "/portfolio-website/assets/icons/sqlmap.png",
            },
            {
                name: "OpenSSL",
                image: "/portfolio-website/assets/icons/open.png",
            },
            {
                name: "UptimeRobot",
                image: "/portfolio-website/assets/icons/uptimerobot.png",
            },
            {
                name: "Postman",
                image: "/portfolio-website/assets/icons/postman.png",
            },
        ],

        Virtualization: [
            {
                name: "Oracle VirtualBox",
                image: "/portfolio-website/assets/icons/ovb.png",
            },
        ],
    };

    const categories = Object.keys(skills);

    const [selectedCategory, setSelectedCategory] =
        useState("Development Tools");

    return (
        <section id="technical-skills">
            <div className="technical-container">

                {/* Header */}
                <div className="technical-header">
                    <span className="section-label">
                        EXPERTISE
                    </span>

                    <h2>Technical Skills</h2>

                    <p>
                        A collection of technologies, tools, and platforms
                        I have worked with throughout my academic and
                        professional projects.
                    </p>
                </div>

                {/* Category Navigation */}
                <div className="skills-categories">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            className={`skill-category ${
                                selectedCategory === category
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() =>
                                setSelectedCategory(category)
                            }
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills */}
                <div className="skills-panel">

                    <div className="skills-panel-header">
                        <div>
                            <span>SELECTED CATEGORY</span>
                            <h3>{selectedCategory}</h3>
                        </div>

                        <span className="skills-count">
                            {skills[selectedCategory].length}{" "}
                            {skills[selectedCategory].length === 1
                                ? "skill"
                                : "skills"}
                        </span>
                    </div>

                    <div className="skills-grid">
                        {skills[selectedCategory].map((skill) => (
                            <div
                                className="skill-card"
                                key={skill.name}
                            >
                                <div className="skill-icon">
                                    <img
                                        src={skill.image}
                                        alt={skill.name}
                                        loading="lazy"
                                    />
                                </div>

                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default TechnicalSkills;