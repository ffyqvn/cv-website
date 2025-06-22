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
  const downloadBtn = document.querySelector("a[download] button");
  const toast = document.getElementById("toast");

  if (downloadBtn && toast) {
    downloadBtn.addEventListener("click", () => {
      toast.classList.add("show");
      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);
    });
  }
});

