/* =====================================================
   ZeroMark UI Effects
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  const card = document.querySelector(".card");
  if (!card) return;

  /* ---------- Mouse glow ---------- */
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--my", `${(y / rect.height) * 100}%`);
    card.style.setProperty("--glow-opacity", "1");
  });

  card.addEventListener("mouseleave", () => {
    card.style.setProperty("--glow-opacity", "0");
  });

  /* ---------- Gentle 3D tilt ---------- */
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / rect.height) * 3; // very soft
    const rotateY = (x / rect.width) * 3;

    card.style.transform =
      `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg)";
  });

});
