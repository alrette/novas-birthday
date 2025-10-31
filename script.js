document.addEventListener("DOMContentLoaded", () => {
  // Page 1
  const nextButton = document.getElementById("nextButton");
  if (nextButton) {
    nextButton.addEventListener("click", () => {
      // remember that we want music
      sessionStorage.setItem("startMusic", "1");
      window.location.href = "letter.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // --- Page 2 elements
  const openLetterBtn = document.getElementById("openLetterBtn");
  const letterContent = document.getElementById("letter-content");
  const envelopeSection = document.getElementById("envelope-section");
  const continueBtn = document.getElementById("continueBtn");
  const bgm = document.getElementById("bgm");

  // If we came from page 1 intending to play music,
  // start it on the FIRST click on this page
  const shouldStartMusic = sessionStorage.getItem("startMusic") === "1";

  if (openLetterBtn) {
    openLetterBtn.addEventListener("click", () => {
      // reveal letter
      envelopeSection.classList.add("hidden");
      letterContent.classList.remove("hidden");

      // start music (user gesture satisfied)
      if (shouldStartMusic && bgm) {
        bgm.play().catch(() => {
          // ignore errors silently; mobile can be picky
        });
        // clear the flag so it doesn't replay on refresh
        sessionStorage.removeItem("startMusic");
      }
    });
  }

  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      window.location.href = "gallery.html";
    });
  }
});
