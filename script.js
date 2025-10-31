document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("nextButton");

  button.addEventListener("click", () => {
    window.location.href = "letter.html"; 
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const openLetterBtn = document.getElementById("openLetterBtn");
  const letterContent = document.getElementById("letter-content");
  const envelopeSection = document.getElementById("envelope-section");
  const continueBtn = document.getElementById("continueBtn");

  if (openLetterBtn) {
    openLetterBtn.addEventListener("click", () => {
      envelopeSection.classList.add("hidden");
      letterContent.classList.remove("hidden");
    });
  }

  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      window.location.href = "gallery.html"; // or next page you’ll create
    });
  }
});

