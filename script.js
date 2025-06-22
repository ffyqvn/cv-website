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
    downloadBtn.addEventListener("click", () => {
      // Create a temporary <a> to trigger the download
      const a = document.createElement("a");
      a.href = "OFFER LETTER.pdf";
      a.download = "Nurfarahin_Afifah_CV.pdf"; // Optional: rename downloaded file
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Show toast
      toast.classList.add("show");
      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);
    });
  }
});
