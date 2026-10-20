// =============================
// MOBILE NAVIGATION
// =============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuBtn.setAttribute("aria-expanded", String(isOpen));
  menuBtn.innerHTML = isOpen ? "&times;" : "&#9776;";
});

// Close navigation when clicking links

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.innerHTML = "&#9776;";
  });
});

// =============================
// SCROLL REVEAL ANIMATION
// =============================

const sections = document.querySelectorAll(".section");

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }

    });

  }, {
    threshold: 0.08
  });

  sections.forEach(section => {
    section.classList.add("reveal");
    observer.observe(section);
  });

}

// =============================
// ACTIVE NAVIGATION LINK
// =============================

const pageSections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

const updateActiveNavigation = () => {

  let currentSection = "home";

  pageSections.forEach(section => {

    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 150) {
      currentSection = section.getAttribute("id");
    }

  });

  navigationLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }

  });

};

window.addEventListener("scroll", updateActiveNavigation, {
  passive: true
});

updateActiveNavigation();

// =============================
// CONTACT FORM
// =============================

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !emailPattern.test(email) || !message) {

    formStatus.style.color = "#b42318";

    formStatus.textContent =
      "Please complete all fields and enter a valid email address.";

    return;
  }

  const recipient = "jomarapelo01@gmail.com";

  const subject = encodeURIComponent(
    "Portfolio Inquiry from " + name
  );

  const body = encodeURIComponent(
    "Name: " + name + "\n" +
    "Email: " + email + "\n\n" +
    "Message:\n" + message
  );

  const mailtoLink =
    "mailto:" + recipient +
    "?subject=" + subject +
    "&body=" + body;

  formStatus.style.color = "#4f46e5";

  formStatus.textContent =
    "Opening your email application. Please press Send there to deliver your message.";

  window.location.href = mailtoLink;

});

// =============================
// AUTOMATIC FOOTER YEAR
// =============================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}