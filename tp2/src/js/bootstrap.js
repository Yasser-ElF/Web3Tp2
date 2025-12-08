import * as bootstrap from "bootstrap";

// active tous les tooltips bootstrap sur la page
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
  new bootstrap.Tooltip(el);
});