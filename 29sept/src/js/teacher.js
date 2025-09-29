
document.querySelectorAll(".nav-icon").forEach(icon => {
  icon.addEventListener("click", () => {
    alert("Feature coming soon!");
  });
});

document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    alert(button.textContent + " clicked!");
  });
});
