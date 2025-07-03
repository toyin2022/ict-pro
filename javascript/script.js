document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 150) {
      navbar.classList.add("fixed");

      if (currentScrollY < lastScrollY) {
        // Scrolling up
        navbar.classList.remove("hidden");
      } else {
        // Scrolling down
        navbar.classList.add("hidden");
      }
    } else {
      navbar.classList.remove("fixed");
    }

    lastScrollY = currentScrollY;
  });
});

// MENU
const hamburger = document.querySelector(".hambugger");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const close = document.querySelector(".close-menu");
const menuLinks = document.querySelectorAll(".hamburger-menu a");

hamburger.addEventListener("click", () => {
  hamburgerMenu.classList.add("open");
});
close.addEventListener("click", () => {
  hamburgerMenu.classList.remove("open");
});
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerMenu.classList.remove("open");
  });
});
document.addEventListener("click", (event) => {
  if (
    !hamburgerMenu.contains(event.target) &&
    !hamburger.contains(event.target)
  ) {
    hamburgerMenu.classList.remove("open");
  }
});
window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  let heroSection = document.querySelector(".parallax");

  heroSection.style.backgroundPosition =
    "center " + scrollPosition * 0.2 + "px";
});

const counters = document.querySelectorAll(".count");
let counted = false;

function countUp() {
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const speed = 1500;
    const increment = Math.ceil(target / speed);

    let count = 0;
    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        counter.textContent = target + "+";
        clearInterval(interval);
      } else {
        counter.textContent = count + "+";
      }
    }, 20);
  });
}

window.addEventListener("scroll", () => {
  const section = document.querySelector(".counter-up");
  const sectionTop = section.getBoundingClientRect().top;
  const sectionVisible = window.innerHeight - sectionTop;

  if (sectionVisible > 0 && !counted) {
    countUp();
    counted = true;
  }
});

// PROJECT
const projects = [
  {
    category: "Web dev",
    title: "Portfolio Website",
    description: "A personal portfolio built with HTML, CSS, and JavaScript.",
    image: "../assets/images/app.png",
    liveLink: "https://live-portfolio.com",
    codeLink: "https://github.com/user/portfolio",
  },
  {
    category: "Web dev",
    title: "E-commerce Website",
    description: "An online store built with React and Node.js.",
    image: "../assets/images/app.png",
    liveLink: "https://live-ecommerce.com",
    codeLink: "https://github.com/user/ecommerce",
  },
  {
    category: "App dev",
    title: "Task Manager App",
    description: "A mobile app to track daily tasks and productivity.",
    image: "../assets/images/app.png",
    liveLink: "https://live-taskmanager.com",
    codeLink: "https://github.com/user/taskmanager",
  },
  {
    category: "Graphics",
    title: "Logo Design",
    description: "Creative logo design for small businesses.",
    image: "../assets/images/app.png",
    liveLink: "https://live-logodesign.com",
    codeLink: "https://github.com/user/logodesign",
  },
  // Add more projects as needed
];

document.addEventListener("DOMContentLoaded", () => {
  const projectCardsContainer = document.getElementById("project-cards");
  const categories = document.querySelectorAll(".category");

  // Function to render cards
  const renderCards = (filterCategory = "All") => {
    projectCardsContainer.innerHTML = ""; // Clear previous cards
    const filteredProjects = projects.filter(
      (project) =>
        filterCategory === "All" || project.category === filterCategory
    );

    filteredProjects.forEach((project) => {
      projectCardsContainer.innerHTML += `
        <div class="swiper-slide project-card">
          <img src="${project.image}" alt="${project.title}">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-links">
            <a href="${project.liveLink}" target="_blank" class="btn live-btn">Live Project</a>
            <a href="${project.codeLink}" target="_blank" class="btn code-btn">GitHub Code</a>
          </div>
        </div>
      `;
    });

    swiper.update(); // Update Swiper after rendering
  };

  // Initialize Swiper
  const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Category click event
  categories.forEach((category) => {
    category.addEventListener("click", () => {
      // Remove active class from all categories
      categories.forEach((cat) => cat.classList.remove("active"));
      // Add active class to selected category
      category.classList.add("active");

      // Filter cards by category
      const selectedCategory = category.dataset.category;
      renderCards(selectedCategory);
    });
  });

  // Initial render
  renderCards();
});
