// Initialize GSAP with ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Function to check if device is mobile
function isMobile() {
  return window.innerWidth <= 500;
}

// Animation for first page
function animateFirstPage() {
  if (isMobile()) {
    // Mobile animation - fade in boxes one by one
    const mobileBoxes = [
      ".blue-box1",
      ".content-box1",
      ".blue-box2",
      ".blue-box3",
      ".blue-box4",
      ".blue-box5",
      ".blue-box6",
      ".blue-box7",
      ".blue-box8",
      ".blue-box9",
      ".blue-box10",
      ".content-box2",
      ".firstpage-content-box",
    ];

    mobileBoxes.forEach((box, index) => {
      gsap.fromTo(
        box,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out",
        }
      );
    });
  } else {
    gsap.fromTo(
      ".firstpage-header",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".content-box1",
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.3, ease: "power2.out" }
    );

    gsap.fromTo(
      ".content-box2",
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: "power2.out" }
    );

    gsap.fromTo(
      ".firstpage-content-box",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.7, ease: "power2.out" }
    );
  }
}

// Animation for second page
function animateSecondPage() {
  if (isMobile()) {
    // Mobile animation - fade in boxes and text one by one
    const mobileElements = [
      ".secondpage-content-box1",
      ".secondpage-text-content1",
      ".secondpage-content-box2",
      ".secondpage-content-box3",
      ".secondpage-text-content2",
      ".secondpage-content-box4",
      ".secondpage-text-content3",
      ".secondpage-text-content4",
      ".secondpage-text-content5",
      ".secondpage-content-box5",
      ".secondpage-text-content6",
      ".secondpage-content-box6",
      ".secondpage-content-box7",
      ".secondpage-text-content7",
      ".secondpage-text-content8",
      ".secondpage-content-box8",
      ".secondpage-text-content9",
      ".secondpage-content-box9",
      ".secondpage-text-content10",
      ".social-media-box",
    ];

    mobileElements.forEach((element, index) => {
      gsap.fromTo(
        element,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: index * 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".secondpage",
            start: "top 70%",
            once: true,
          },
        }
      );
    });
  } else {
    // Desktop animation - header
    gsap.fromTo(
      ".secondpage-header",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".secondpage",
          start: "top 70%",
          once: true,
        },
      }
    );

    // Desktop - text elements with scale animation and more delay
    const textElements = [
      ".secondpage-text-content1",
      ".secondpage-text-content2",
      ".secondpage-text-content3",
      ".secondpage-text-content4",
      ".secondpage-text-content5",
      ".secondpage-text-content6",
      ".secondpage-text-content7",
      ".secondpage-text-content8",
      ".secondpage-text-content9",
      ".secondpage-text-content10",
      ".secondpage-text-content11",
    ];

    textElements.forEach((element, index) => {
      gsap.fromTo(
        element,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.5 + index * 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".secondpage",
            start: "top 50%",
            once: true,
          },
        }
      );
    });

    // Social media box animation
    gsap.fromTo(
      ".social-media-box",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".secondpage",
          start: "top 50%",
          once: true,
        },
      }
    );
  }
}

// Animation for third page
function animateThirdPage() {
  gsap.fromTo(
    ".thirdpage h1",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".thirdpage",
        start: "top 80%",
        once: true,
      },
    }
  );

  gsap.fromTo(
    ".thirdpage p",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".thirdpage",
        start: "top 70%",
        once: true,
      },
    }
  );
}

// Animation for contact section
function animateContactSection() {
  gsap.fromTo(
    ".contact-section h1",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
        once: true,
      },
    }
  );

  const contactItems = [
    ".contact-socail-media-main-box:nth-child(2)",
    ".contact-socail-media-main-box:nth-child(3)",
    ".contact-socail-media-main-box:nth-child(4)",
    ".contact-socail-media-main-box:nth-child(5)",
  ];

  contactItems.forEach((item, index) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 60%",
          once: true,
        },
      }
    );
  });
}

// Initialize all animations when page loads
document.addEventListener("DOMContentLoaded", function () {
  // First page animation (no scroll trigger needed)
  animateFirstPage();

  // Other page animations with scroll triggers
  animateSecondPage();
  animateThirdPage();
  animateContactSection();
});

// Reinitialize animations on window resize
window.addEventListener("resize", function () {
  // Refresh ScrollTrigger to recalculate positions
  ScrollTrigger.refresh();
});
