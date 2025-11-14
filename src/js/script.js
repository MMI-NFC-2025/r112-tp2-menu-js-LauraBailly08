const nav = document.querySelector(".menu");

const toggle = document.querySelector(".menu-btn");

toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
    toggle.ariaExpanded = isClosed ? "true" : "false";
    nav.ariaHidden = isClosed ? "false" : "true";
});
