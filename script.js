document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach(section => observer.observe(section));

  // Toast functionality
  const downloadBtn = document.getElementById("downloadBtn");
  const toast = document.getElementById("toast");

  if (downloadBtn && toast) {
    downloadBtn.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent instant navigation if button is wrapped in <a>

      // Show toast first
      toast.classList.add("show");

      // Start download after short delay (500ms)
      setTimeout(() => {
        const a = document.createElement("a");
        a.href = "cv.pdf"; // Change path if needed
        a.download = "My_Professional_CV.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }, 500);

      // Hide toast after 3 seconds
      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);
    });
  }

  // Dark Mode Toggle
  const darkToggleBtn = document.getElementById("darkModeToggle");

  // Load saved theme
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    const icon = darkToggleBtn.querySelector("i");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    darkToggleBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
  }

  if (darkToggleBtn) {
    darkToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const icon = darkToggleBtn.querySelector("i");

      if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        darkToggleBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        localStorage.setItem("darkMode", "enabled");
      } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        darkToggleBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        localStorage.setItem("darkMode", "disabled");
      }
    });
  }

  // Smooth Scroll Fix for Sticky Header
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      e.preventDefault();

      const headerOffset = document.querySelector("header").offsetHeight;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset + 10;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    });
  });
});
