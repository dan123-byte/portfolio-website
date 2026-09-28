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
            <div className="container">

                {/* Section Title */}
                <div className="text-center mb-4">
                    <h2>Technical Skills</h2>
                </div>

                {/* Category Selector */}
                <div className="mb-4">
                    <label
                        htmlFor="skill-category"
                        className="form-label"
                    >
                        Skill Category
                    </label>

                    <select
                        id="skill-category"
                        className="form-select"
                        value={selectedCategory}
                        onChange={(event) =>
                            setSelectedCategory(event.target.value)
                        }
                    >
                        {categories.map((category) => (
                            <option
                                key={category}
                                value={category}
                            >
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Skill Icons */}
                <div id="icons-panel">
                    <div className="row justify-content-center g-4">

                        {skills[selectedCategory].map((skill) => (
                            <div
                                className="col-6 col-sm-4 col-md-3 col-lg-2"
                                key={skill.name}
                            >
                                <div
                                    className="icon-item text-center"
                                    data-name={skill.name}
                                >
                                    <img
                                        src={skill.image}
                                        alt={skill.name}
                                        loading="lazy"
                                    />

                                    <p className="mt-2">
                                        {skill.name}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
}

export default TechnicalSkills;