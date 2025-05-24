// Scroll reveal for fade-slide animations
document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".animate-fade-slide");
  
    function revealOnScroll() {
      const windowBottom = window.innerHeight + window.scrollY;
      animatedElements.forEach((el) => {
        if (windowBottom > el.offsetTop + 100) {
          el.classList.add("visible");
        }
      });
    }
  
    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);
  
    // Navbar background on scroll
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  });
 const scrollBtn = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
