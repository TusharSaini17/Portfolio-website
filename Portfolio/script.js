document.addEventListener("DOMContentLoaded", () => {
    // Select all project elements
    const projects = document.querySelectorAll(".project1, .project2, .project3");

    // Function to handle the click event and open the link in a new tab
    function redirectToLink(project) {
        const link = project.getAttribute("data-link");
        if (link) {
            window.open(link, '_blank'); // Opens the link in a new tab
        }
    }

    // Attach event listeners to each project
    projects.forEach(project => {
        project.addEventListener("click", () => {
            redirectToLink(project);
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".side-nav-link");

    // Function to set the active link and scroll to the section
    function setActiveLink(link) {
        // If the link is already active, do nothing
        if (link.classList.contains("active")) {
            return;
        }

        // Remove the active class from all links
        navLinks.forEach(nav => nav.classList.remove("active"));

        // Add the active class to the clicked link
        link.classList.add("active");

        // Scroll to the section based on the clicked link's href
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            // Smoothly scroll to the section using scrollIntoView
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Align section to the top of the viewport
            });

            // Update the URL hash without causing an instant jump
            window.history.pushState(null, null, targetId);
        }
    }

    // Attach event listeners to each navigation link
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default anchor click behavior
            setActiveLink(link); // Scroll to the section and mark link as active
        });
    });

    // Keep "Home" active by default when the page loads
    window.onload = () => {
        const currentHash = window.location.hash || '#home';
        const initialLink = document.querySelector(`.side-nav-link[href="${currentHash}"]`);
        if (initialLink) {
            setActiveLink(initialLink); // Set the active link based on the current hash
        } else {
            setActiveLink(document.querySelector('#home-link')); // Default to home link
        }
    };

    // Handle browser back/forward navigation with popstate
    window.addEventListener("popstate", () => {
        const currentHash = window.location.hash || '#home';
        const currentLink = document.querySelector(`.side-nav-link[href="${currentHash}"]`);

        if (currentLink) {
            setActiveLink(currentLink); // Scroll to the section when back/forward is used
        }
    });
});





document.addEventListener("scroll", () => {
    const scroll1 = document.getElementById("scroll1");
    const scrollPosition = window.scrollY;
    const scroll1Height = scroll1.offsetHeight;
    
    const aboutSection = document.querySelector(".aboutsection");
  
    // Adjust the threshold based on when you want the about section to become visible
    const transitionStart = scroll1Height * 0.6; // or any other appropriate value
    
    if (scrollPosition > transitionStart) {
      aboutSection.classList.add("show-aboutsection");
    } else {
      aboutSection.classList.remove("show-aboutsection");
    }
});
  
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// New scroll-based hamburger menu
const newHamburger = document.querySelector(".new-hamburger");
const newNavMenu = document.querySelector(".new-navbar-menu");
const newOverlay = document.querySelector(".new-overlay");
const body = document.body;
const html = document.documentElement;

newHamburger.addEventListener("click", () => {
    newHamburger.classList.toggle("active");
    newNavMenu.classList.toggle("active");
    newOverlay.classList.toggle("active");
    body.classList.toggle("no-scroll");
    html.classList.toggle("no-scroll"); // Apply no-scroll to html element too
});

document.querySelectorAll(".new-nav-link").forEach(n => n.addEventListener("click", () => {
    newHamburger.classList.remove("active");
    newNavMenu.classList.remove("active");
    newOverlay.classList.remove("active");
    body.classList.remove("no-scroll");
    html.classList.remove("no-scroll"); // Remove no-scroll from html element
}));
  

//code for circle background animation

document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll('.circle');

    // Function to generate a random position within a specified region
    function getRandomPosition(region) {
        let randomX, randomY;
        switch (region) {
            case 'top':
                randomX = Math.random() * (window.innerWidth - 100);
                randomY = Math.random() * (window.innerHeight / 2 - 100);
                break;
            case 'bottom':
                randomX = Math.random() * (window.innerWidth - 100);
                randomY = Math.random() * (window.innerHeight / 2 - 100) + window.innerHeight / 2;
                break;
            case 'left':
                randomX = Math.random() * (window.innerWidth / 2 - 100);
                randomY = Math.random() * (window.innerHeight - 100);
                break;
            case 'right':
                randomX = Math.random() * (window.innerWidth / 2 - 100) + window.innerWidth / 2;
                randomY = Math.random() * (window.innerHeight - 100);
                break;
            default:
                randomX = Math.random() * (window.innerWidth - 100);
                randomY = Math.random() * (window.innerHeight - 100);
        }
        return { x: randomX, y: randomY };
    }

    circles.forEach(function(circle, index) {
        // Distribute circles among regions
        const regions = ['top', 'bottom', 'left', 'right'];
        const region = regions[index % regions.length];

        setTimeout(() => {
            moveCircle(circle, region);
        }, Math.random() * 100); // Random initial delay up to 2 seconds
    });

    function moveCircle(circle, region) {
        function animate() {
            const { x, y } = getRandomPosition(region);
            const randomDuration = Math.random() * 2000 + 2000; // Random duration between 3s and 8s

            circle.style.transition = `transform ${randomDuration}ms linear`;
            circle.style.transform = `translate(${x}px, ${y}px)`;

            setTimeout(() => {
                requestAnimationFrame(animate);
            }, randomDuration);
        }

        animate();
    }
});

window.onload = function() {
    if (window.location.hash === '#introtext') {
        history.replaceState(null, null, ' '); // Clears the hash from the URL
    }
};