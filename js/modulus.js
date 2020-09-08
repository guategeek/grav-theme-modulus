// Panel Toggle
function togglePanel() {
    const panel = document.getElementById("navPanel");
    const toggle = document.getElementById("navPanelToggle");
    let aria = toggle.getAttribute("aria-expanded");

    panel.classList.toggle('is-open'); // opens and closes panel
    toggle.classList.toggle('is-active'); // Make hamburguer Menu Animate into an X
    //document.body.classList.toggle('panel-is-open'); // If I want the page to slide over for panel
    if (aria == "true") {
        aria = "false";
    }
    else {
        aria = "true";
    }
    toggle.setAttribute("aria-expanded", aria);

}
