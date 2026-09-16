/* =========================================
   PORTFOLIO JAVASCRIPT
========================================= */


/*
    Wait until the HTML document has loaded.
*/

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       SMOOTH NAVIGATION
    ===================================== */

    const navLinks = document.querySelectorAll(
         '.nav-menu a, .nav-button, .hero-buttons a'
    );


    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");


            /*
                Only handle links that point
                to a section on this page.
            */

            if (
                targetId &&
                targetId.startsWith("#") &&
                targetId.length > 1
            ) {

                const targetElement =
                    document.querySelector(targetId);


                if (targetElement) {

                    event.preventDefault();


                    targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });



    /* =====================================
       SCROLL REVEAL
    ===================================== */

    /*
        Select the sections/cards that
        we want to animate when they
        enter the screen.
    */

    const revealElements = document.querySelectorAll(
        ".section-heading, " +
        ".about-text, " +
        ".highlight-card, " +
        ".timeline-item, " +
        ".project-card, " +
        ".skill-group, " +
        ".contact-content"
    );


    /*
        Add the reveal class to each element.
    */

    revealElements.forEach(function (element) {

        element.classList.add("reveal");

    });


    /*
        IntersectionObserver watches when
        an element enters the viewport.
    */

    const observer = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    /*
                        Stop watching the element
                        after it becomes visible.
                    */

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    /*
        Start observing each element.
    */

    revealElements.forEach(function (element) {

        observer.observe(element);

    });



    /* =====================================
       ACTIVE NAVIGATION
    ===================================== */

    const sections = document.querySelectorAll(
        "main section[id]"
    );

    const navigationLinks =
        document.querySelectorAll(
            ".nav-menu a"
        );


    /*
        Highlight the navigation item
        corresponding to the section
        currently visible.
    */

    const sectionObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        const currentSection =
                            entry.target.getAttribute("id");


                        navigationLinks.forEach(
                            function (link) {

                                link.classList.remove(
                                    "active"
                                );


                                if (
                                    link.getAttribute("href") ===
                                    "#" + currentSection
                                ) {

                                    link.classList.add(
                                        "active"
                                    );

                                }

                            }
                        );

                    }

                });

            },
            {
                // threshold: 0.35
                 rootMargin: "-20% 0px -65% 0px"
            }
        );


    sections.forEach(function (section) {

        sectionObserver.observe(section);

    });



    /* =====================================
       PROJECT CARD INTERACTION
    ===================================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach(function (card) {

        card.addEventListener(
            "mouseenter",
            function () {

                card.style.transform =
                    "translateY(-5px)";

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    "translateY(0)";

            }
        );

    });



    /* =====================================
       CURRENT YEAR
    ===================================== */

    /*
        Automatically update the copyright
        year in the footer.

        This means you don't have to
        manually change 2026 later.
    */

    const yearElement =
        document.querySelector(
            ".footer-container p:first-child"
        );


    if (yearElement) {

        yearElement.textContent =
            "© " +
            new Date().getFullYear() +
            " Chester Kent Canilao";

    }



    /* =====================================
       CONSOLE MESSAGE
    ===================================== */

    /*
        This is only for development.

        Open Chrome DevTools:
        F12 → Console
    */

    console.log(
        "Chester Kent Canilao Portfolio loaded successfully."
    );

    /* =====================================
        PROFILE IMAGE VIEWING
    ===================================== */

    const profileLogo = document.querySelector(".logo");
    const profileModal = document.getElementById("profileModal");
    const profileModalClose = document.getElementById("profileModalClose");

    profileLogo.addEventListener("click", function (event) {

        event.preventDefault();

        const homeSection = document.getElementById("home");
        const rect = homeSection.getBoundingClientRect();

        const isHomeVisible =
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2;

        if (isHomeVisible) {

            profileModal.classList.add("active");

        } else {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

    });

    profileModalClose.addEventListener("click", function () {

        profileModal.classList.remove("active");

    });


    profileModal.addEventListener("click", function (event) {

        if (event.target === profileModal) {

            profileModal.classList.remove("active");

        }

    });


    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            profileModal.classList.remove("active");

        }

    });

});