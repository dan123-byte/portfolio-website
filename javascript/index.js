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
            img: "assets/ust js.jpg",
            title: "Junior High School",
            subtitle: "UST - Junior High School",
            loading: "lazy"
        },
        {
            img: "assets/ust shs.jpg",
            title: "Senior High School",
            subtitle: "UST - Senior High School",
            loading: "lazy"
        },
        {
            img: "assets/ust cics.jpg",
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

    `I developed FastAPI endpoints for seamless data integration in a School Management System and enhanced UX/UI in Flutter and Odoo with dynamic profiles, customizable fields, and intuitive interfaces. Additionally, I integrated real-time push notifications using Firebase, built an interactive notification system, designed a Task Manager module with multiple views, and documented progress to support collaboration and maintainability.`
  ];

  document.querySelectorAll(".arrow-btn").forEach((button, index) => {
    button.addEventListener("click", () => {
      detailsParagraph.textContent = projectDescriptions[index];
    });
  });
});

// Skills Menu - Shapes
const items = document.querySelectorAll(".circle-menu h6");
const panel = document.getElementById("infoPanel");

const icons = {
  "Development Tools": [
    '<div class="icon-item" data-name="VS Code"><img src="assets/icons/vs.png" alt="VS Code"></div>',
    '<div class="icon-item" data-name="Android Studio"><img src="assets/icons/as.png" alt="Android Studio"></div>',
    '<div class="icon-item" data-name="pgAdmin 4"><img src="assets/icons/pgadmin.png" alt="pgAdmin 4"></div>'
  ],
  "Programming Languages": [
    '<div class="icon-item" data-name="Python"><img src="assets/icons/py.png" alt="Python"></div>',
    '<div class="icon-item" data-name="SQL"><img src="assets/icons/sql.png" alt="SQL"></div>',
    '<div class="icon-item" data-name="JavaScript"><img src="assets/icons/js.png" alt="JavaScript"></div>',
    '<div class="icon-item" data-name="HTML"><img src="assets/icons/html.png" alt="HTML"></div>',
    '<div class="icon-item" data-name="CSS"><img src="assets/icons/css.png" alt="CSS"></div>',
    '<div class="icon-item" data-name="XML"><img src="assets/icons/xml.png" alt="XML"></div>'
  ],
  "Frameworks": [
    '<div class="icon-item" data-name="Flutter"><img src="assets/icons/flutter.png" alt="Flutter"></div>',
    '<div class="icon-item" data-name="FastAPI"><img src="assets/icons/fa.png" alt="FastAPI"></div>',
    '<div class="icon-item" data-name="Odoo"><img src="assets/icons/odoo.png" alt="Odoo"></div>',
    '<div class="icon-item" data-name="React"><img src="assets/icons/react.png" alt="React"></div>'
  ],
  "Databases": [
    '<div class="icon-item" data-name="PostgreSQL"><img src="assets/icons/postgresql.png" alt="PostgreSQL"></div>'
  ],
  "Version Control": [
    '<div class="icon-item" data-name="Git"><img src="assets/icons/git.png" alt="Git"></div>',
    '<div class="icon-item" data-name="GitHub"><img src="assets/icons/github.png" alt="GitHub"></div>'
  ],
  "Testing Tools": [
    '<div class="icon-item" data-name="sqlmap"><img src="assets/icons/sqlmap.png" alt="sqlmap"></div>',
    '<div class="icon-item" data-name="Apache Jmeter"><img src="assets/icons/apache.png" alt="Apache Jmeter"></div>',
    '<div class="icon-item" data-name="Open SSL"><img src="assets/icons/open.png" alt="Open SSL"></div>',
    '<div class="icon-item" data-name="Oracle VirtualBox"><img src="assets/icons/ovb.png" alt="Oracle VirtualBox"></div>',
    '<div class="icon-item" data-name="UptimeRobot"><img src="assets/icons/uptimerobot.png" alt="UptimeRobot"></div>'
  ]
};

items.forEach(item => {
  item.addEventListener("click", () => {
    const side = item.dataset.side;
    panel.style.display = "block";

    const iconSet = (icons[item.textContent] || []).join("");

    panel.classList.remove("left", "right");
    panel.classList.add(side);

    panel.innerHTML = `
      <div class="icons-container">
        <div class="icon-grid">
          ${iconSet}
        </div>
      </div>
    `;
  });
});

// Highlight Selected
const menuItems = document.querySelectorAll('.circle-menu h6');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});
