import { getCurrentUser, logout } from "../stores/auth.js";
document.addEventListener("DOMContentLoaded", () => {
  const user = getCurrentUser();

  if (!user) {
    window.location.href = "/frontend/public/index.html";
  }

  document.querySelector("#logoutBtn")?.addEventListener("click", () => {
    logout();
  });
});
