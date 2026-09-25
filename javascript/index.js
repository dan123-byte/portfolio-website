// Education - Carousel Cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = [
        {
            img: "assets/esps.jpg",
            title: "Elementary School",
            subtitle: "Espiritu Santo Parochial School",
            loading: "lazy"
        },
        {
            img: "assets/ust_js.jpg",
            title: "Junior High School",
            subtitle: "UST - Junior High School",
            loading: "lazy"
        },
        {
            img: "assets/ust_shs.jpg",
            title: "Senior High School",
            subtitle: "UST - Senior High School",
            loading: "lazy"
        },
        {
            img: "assets/ust_cics.jpg",
            title: "College",
            subtitle: "UST - CICS",
            loading: "lazy"
        }
    ];

    const row = document.querySelector('#educationCarousel .row');
    const visibleCount = 3;
    let startIndex = 0;

    function renderCards() {
        row.innerHTML = '';
        for (let i = 0; i < visibleCount; i++) {
            const index = (startIndex + i) % cards.length;
            const card = cards[index];
            const col = document.createElement('div');
            col.className = "col-md-4 mb-3";
            col.innerHTML = `
                <div class="card text-center">
                <img src="${card.img}" class="card-img-top" alt="${card.title}">
                <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${card.subtitle}</h6>
                </div>
                </div>
            `;
            row.appendChild(col);
        }
    }

    renderCards();

    document.getElementById('nextBtn').addEventListener('click', () => {
        startIndex = (startIndex + 1) % cards.length;
        renderCards();
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        startIndex = (startIndex - 1 + cards.length) % cards.length;
        renderCards();
    });
});

// Project Decription - Selection
document.addEventListener("DOMContentLoaded", () => {
  const detailsParagraph = document.querySelector("#project-details p");

  const projectDescriptions = [
    `I developed and executed test cases to validate key website features, ensuring they met functional and performance requirements. I performed unit and integration testing to verify module functionality, independence, and seamless collaboration between system components. Additionally, I identified critical bugs and collaborated with developers to implement fixes, improving system stability and reducing post-launch issues.`,

    `I developed and executed test cases to validate core website features, including cross-platform, security, and encryption testing, while also conducting UAT to gather feedback on usability and accessibility. Additionally, I led load and stress testing to improve scalability, monitored system uptime to recommend stability improvements, and utilized code quality tools to enhance maintainability for long-term updates.`,

    `I developed FastAPI endpoints for seamless data integration in a School Management System and enhanced UX/UI in Flutter and Odoo with dynamic profiles, customizable fields, and intuitive interfaces. Additionally, I integrated real-time push notifications using Firebase, built an interactive notification system, designed a Task Manager module with multiple views, and documented progress to support collaboration and maintainability.`,

    `I developed a multi-page automobile product website using WordPress, creating key pages such as Home, Products, About Us, Contact Us, and Location, while customizing themes and plugins to ensure a clean layout, intuitive navigation, and easy content management.`,

    `I maintained and enhanced internal and product systems, adding over four new features and improving existing functionalities using React on the frontend and Ruby on the backend, while collaborating with the team to troubleshoot issues and optimize overall system performance.`,

    `I developed and maintained over 30 RESTful API endpoints using Node.js for a location-based AR game, supporting authentication, gameplay, and in-game transactions. I managed PostgreSQL database integration, deployed backend services on Google Cloud Platform (GCP), implemented Redis caching to improve performance, documented APIs using Swagger, performed API testing with Postman, and collaborated with frontend developers to ensure seamless system integration and scalability for 500–1,000 concurrent users.`,

    `I developed and contributed to the migration of a sales outreach platform supporting cold calling, email outreach, lead management, and contact tracking. Built reusable React and TypeScript components, integrated RESTful APIs, resolved UI/API bugs, and collaborated with cross-functional teams to ensure seamless feature validation and performance.`
  ];

  document.querySelectorAll(".arrow-btn").forEach((button, index) => {
    button.addEventListener("click", () => {
      detailsParagraph.textContent = projectDescriptions[index];
    });
  });
});

// Skills Menu
const icons = {
  "Development Tools": [
    '<div class="icon-item" data-name="VS Code"><img src="assets/icons/vs.png" alt="VS Code"></div>',
    '<div class="icon-item" data-name="Android Studio"><img src="assets/icons/as.png" alt="Android Studio"></div>',
  ],

  "Programming Languages": [
    '<div class="icon-item" data-name="Python"><img src="assets/icons/py.png" alt="Python"></div>',
    '<div class="icon-item" data-name="SQL"><img src="assets/icons/sql.png" alt="SQL"></div>',
    '<div class="icon-item" data-name="JavaScript"><img src="assets/icons/js.png" alt="JavaScript"></div>',
    '<div class="icon-item" data-name="HTML"><img src="assets/icons/html.png" alt="HTML"></div>',
    '<div class="icon-item" data-name="CSS"><img src="assets/icons/css.png" alt="CSS"></div>',
    '<div class="icon-item" data-name="XML"><img src="assets/icons/xml.png" alt="XML"></div>',
    '<div class="icon-item" data-name="Ruby"><img src="assets/icons/ruby.png" alt="Ruby"></div>'
  ],

  "Frameworks": [
    '<div class="icon-item" data-name="Flutter"><img src="assets/icons/flutter.png" alt="Flutter"></div>',
    '<div class="icon-item" data-name="FastAPI"><img src="assets/icons/fa.png" alt="FastAPI"></div>',
    '<div class="icon-item" data-name="Odoo"><img src="assets/icons/odoo.png" alt="Odoo"></div>',
    '<div class="icon-item" data-name="React"><img src="assets/icons/react.png" alt="React"></div>',
    '<div class="icon-item" data-name="Node.js"><img src="assets/icons/nodejs.png" alt="Node.js"></div>',
    '<div class="icon-item" data-name="WordPress"><img src="assets/icons/wp.png" alt="WordPress"></div>'
  ],

  "Cloud & Server": [
    '<div class="icon-item" data-name="Google Cloud Platform"><img src="assets/icons/gcp.png" alt="Google Cloud Platform"></div>',
    '<div class="icon-item" data-name="Google Cloud Storage"><img src="assets/icons/gcs.png" alt="Google Cloud Storage"></div>',
    '<div class="icon-item" data-name="Redis"><img src="assets/icons/redis.png" alt="Redis"></div>'
  ],

  "API Development": [
    '<div class="icon-item" data-name="REST API"><img src="assets/icons/restapi.png" alt="REST API"></div>',
    '<div class="icon-item" data-name="Swagger"><img src="assets/icons/swagger.png" alt="Swagger"></div>',
    '<div class="icon-item" data-name="JSON"><img src="assets/icons/json.png" alt="JSON"></div>'
  ],

  "Databases": [
    '<div class="icon-item" data-name="PostgreSQL"><img src="assets/icons/postgresql.png" alt="PostgreSQL"></div>',
    '<div class="icon-item" data-name="Firebase"><img src="assets/icons/fb.png" alt="Firebase"></div>'
  ],

  "Version Control": [
    '<div class="icon-item" data-name="Git"><img src="assets/icons/git.png" alt="Git"></div>',
    '<div class="icon-item" data-name="GitHub"><img src="assets/icons/github.png" alt="GitHub"></div>'
  ],

  "CI/CD": [
    '<div class="icon-item" data-name="GitHub Actions"><img src="assets/icons/github-actions.png" alt="GitHub Actions"></div>'
  ],

  "Testing & Monitoring": [
    '<div class="icon-item" data-name="Jest"><img src="assets/icons/jest.png" alt="Jest"></div>',
    '<div class="icon-item" data-name="Apache JMeter"><img src="assets/icons/apache.png" alt="Apache JMeter"></div>',
    '<div class="icon-item" data-name="k6"><img src="assets/icons/k6.png" alt="k6"></div>',
    '<div class="icon-item" data-name="sqlmap"><img src="assets/icons/sqlmap.png" alt="sqlmap"></div>',
    '<div class="icon-item" data-name="OpenSSL"><img src="assets/icons/open.png" alt="OpenSSL"></div>',
    '<div class="icon-item" data-name="UptimeRobot"><img src="assets/icons/uptimerobot.png" alt="UptimeRobot"></div>',
    '<div class="icon-item" data-name="Postman"><img src="assets/icons/postman.png" alt="Postman"></div>'
  ],

  "Virtualization": [
    '<div class="icon-item" data-name="Oracle VirtualBox"><img src="assets/icons/ovb.png" alt="Oracle VirtualBox"></div>'
  ]
};

const selector = document.getElementById("skill-category");
const panel = document.getElementById("icons-panel");

function loadCategory(category){
    panel.innerHTML = icons[category].join("");
}

loadCategory("Development Tools");

selector.addEventListener("change",function(){
    loadCategory(this.value);
});

function preloadSkillIcons() {
    Object.values(icons).flat().forEach((htmlString) => {
        const match = htmlString.match(/src="([^"]+)"/);
        if (match && match[1]) {
            const img = new Image();
            img.src = match[1];
        }
    });
}

document.addEventListener("DOMContentLoaded", preloadSkillIcons);