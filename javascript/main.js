// Education - Carousel Cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = [
        {
            img: "/assets/esps.jpg",
            title: "Elementary School",
            subtitle: "Espiritu Santo Parochial School"
        },
        {
            img: "/assets/ust js.jpg",
            title: "Junior High School",
            subtitle: "UST - Junior High School"
        },
        {
            img: "/assets/ust shs.jpg",
            title: "Senior High School",
            subtitle: "UST - Senior High School"
        },
        {
            img: "/assets/ust cics.jpg",
            title: "College",
            subtitle: "UST - CICS"
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