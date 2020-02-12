

// Run the Panel on page load.
window.onload = function () {
  panelComponent.panelComponent ();
};
// Panel module logic
function panelComponent() {
  let menuToggle = document.querySelector('[data-js="panel-toggle"]');
  let panel = document.querySelector('[data-js="panel"]');
  let aria = panel.getAttribute("aria-expanded");
  menuToggle.addEventListener('click', function () {
      document.body.classList.toggle('is-panel-open');
      panel.classList.toggle('is-open');
      menuToggle.classList.toggle('is-active');
      // Let screen readers know menu is open or closed
      if (aria == "true") {
          aria = "false";
      }
      else {
          aria = "true";
      }
      panel.setAttribute("aria-expanded", aria);
  });
  let closePanel = document.querySelector('[data-js="panel-close"]');
  closePanel.addEventListener('click', function () {
      document.body.classList.remove('is-panel-open');
      panel.classList.remove('is-open');
      menuToggle.classList.remove('is-active');
      // Let screen readers know menu is open or closed
      if (aria == "true") {
          aria = "false";
      }
      else {
          aria = "true";
      }
      panel.setAttribute("aria-expanded", aria);
  });
}