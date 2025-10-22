document.addEventListener("DOMContentLoaded", () => {
  const currentTimeElem = document.getElementById("currentTime");
  const currentDayElem = document.getElementById("currentDay");
  const deploymentDateElem = document.querySelector("time");

  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
      const expanded =
        hamburger.getAttribute("aria-expanded") === "true" || false;
      hamburger.setAttribute("aria-expanded", !expanded);
      navLinks.classList.toggle("active");

      // Animate hamburger into X
      hamburger.classList.toggle("open");
    });
  });

  function updateTime() {
    const now = new Date();

    // Local time (your timezone)
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const localTime = `${hours}:${minutes}:${seconds}`;
    currentTimeElem.textContent = localTime;

    // Current day
    const dayOfWeek = now.toLocaleString("en-US", { weekday: "long" });
    currentDayElem.textContent = dayOfWeek;

    // Deployment date (auto)
    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear();
    deploymentDateElem.textContent = `${day}/${month}/${year}`;
    deploymentDateElem.setAttribute("datetime", `${year}-${month}-${day}`);
  }

  updateTime();
  setInterval(updateTime, 1000);
});
