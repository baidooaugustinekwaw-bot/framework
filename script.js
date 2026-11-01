


// Page information
const pageInfo = {
    home: {
        title: "Page Title",
        subtitle: "A subtitle for your page goes here"
    },

    about: {
        title: "About Us",
        subtitle: "Learn more about who we are"
    },

    services: {
        title: "Our Services",
        subtitle: "Discover the services we offer"
    },

    contact: {
        title: "Contact Us",
        subtitle: "Get in touch with us"
    }
};

// Select navigation elements
const navLinks = document.querySelectorAll(".side-nav .nav-link");

// Select all page sections
const pages = document.querySelectorAll(".page-content");

// Select page heading elements
const pageTitle = document.getElementById("page-title");
const pageSubtitle = document.getElementById("page-subtitle");

// Function to display selected page
function showPage(pageName) {

    // Check if page exists
    if (!pageInfo[pageName]) {
        return;
    }

    // Hide all pages and display selected page
    pages.forEach(function(page) {
        page.classList.remove("active");

        if (page.id === pageName) {
            page.classList.add("active");
        }
    });

    // Update active navigation menu
    navLinks.forEach(function(link) {

        link.classList.remove("active");

        if (link.dataset.page === pageName) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }

    });

    // Change page title
    pageTitle.textContent = pageInfo[pageName].title;

    // Change page subtitle
    pageSubtitle.textContent = pageInfo[pageName].subtitle;

    // Scroll to the top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Add click events to navigation links
navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const selectedPage = this.getAttribute("data-page");

        showPage(selectedPage);

    });

});

// Display current year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Contact form functionality
const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const feedback = document.getElementById("form-feedback");

        feedback.textContent =
            "Thank you for contacting us! Your message has been received in this demo.";

        contactForm.reset();

    });

}
