// UI Effects for ZeroMark - Mouse glow and 3D tilt

document.addEventListener("DOMContentLoaded", function() {
  
  const card = document.querySelector(".card");
  
  if (!card) return;

  // Mouse position tracking for glow effect
  card.addEventListener("mousemove", function(e) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    card.style.setProperty("--mx", percentX + "%");
    card.style.setProperty("--my", percentY + "%");
  });

  // 3D tilt effect
  card.addEventListener("mousemove", function(e) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / rect.height) * 3;
    const rotateY = (x / rect.width) * 3;

    card.style.transform = 
      "perspective(900px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
  });

  // Reset on mouse leave
  card.addEventListener("mouseleave", function() {
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  });

});
