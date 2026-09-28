import { useState } from "react";

function TechnicalSkills() {
    const skills = {
        "Development Tools": [
            {
                name: "VS Code",
                image: "/assets/icons/vs.png",
            },
            {
                name: "Android Studio",
                image: "/assets/icons/as.png",
            },
        ],

        "Programming Languages": [
            {
                name: "Python",
                image: "/assets/icons/py.png",
            },
            {
                name: "SQL",
                image: "/assets/icons/sql.png",
            },
            {
                name: "JavaScript",
                image: "/assets/icons/js.png",
            },
            {
                name: "HTML",
                image: "/assets/icons/html.png",
            },
            {
                name: "CSS",
                image: "/assets/icons/css.png",
            },
            {
                name: "XML",
                image: "/assets/icons/xml.png",
            },
            {
                name: "Ruby",
                image: "/assets/icons/ruby.png",
            },
        ],

        Frameworks: [
            {
                name: "Flutter",
                image: "/assets/icons/flutter.png",
            },
            {
                name: "FastAPI",
                image: "/assets/icons/fa.png",
            },
            {
                name: "Odoo",
                image: "/assets/icons/odoo.png",
            },
            {
                name: "React",
                image: "/assets/icons/react.png",
            },
            {
                name: "Node.js",
                image: "/assets/icons/nodejs.png",
            },
            {
                name: "WordPress",
                image: "/assets/icons/wp.png",
            },
        ],

        "Cloud & Server": [
            {
                name: "Google Cloud Platform",
                image: "/assets/icons/gcp.png",
            },
            {
                name: "Google Cloud Storage",
                image: "/assets/icons/gcs.png",
            },
            {
                name: "Redis",
                image: "/assets/icons/redis.png",
            },
        ],

        "API Development": [
            {
                name: "REST API",
                image: "/assets/icons/restapi.png",
            },
            {
                name: "Swagger",
                image: "/assets/icons/swagger.png",
            },
            {
                name: "JSON",
                image: "/assets/icons/json.png",
            },
        ],

        Databases: [
            {
                name: "PostgreSQL",
                image: "/assets/icons/postgresql.png",
            },
            {
                name: "Firebase",
                image: "/assets/icons/fb.png",
            },
        ],

        "Version Control": [
            {
                name: "Git",
                image: "/assets/icons/git.png",
            },
            {
                name: "GitHub",
                image: "/assets/icons/github.png",
            },
        ],

        "CI/CD": [
            {
                name: "GitHub Actions",
                image: "/assets/icons/github-actions.png",
            },
        ],

        "Testing & Monitoring": [
            {
                name: "Jest",
                image: "/assets/icons/jest.png",
            },
            {
                name: "Apache JMeter",
                image: "/assets/icons/apache.png",
            },
            {
                name: "k6",
                image: "/assets/icons/k6.png",
            },
            {
                name: "sqlmap",
                image: "/assets/icons/sqlmap.png",
            },
            {
                name: "OpenSSL",
                image: "/assets/icons/open.png",
            },
            {
                name: "UptimeRobot",
                image: "/assets/icons/uptimerobot.png",
            },
            {
                name: "Postman",
                image: "/assets/icons/postman.png",
            },
        ],

        Virtualization: [
            {
                name: "Oracle VirtualBox",
                image: "/assets/icons/ovb.png",
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