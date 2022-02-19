// Import dependencies
import SlideNav from "./libs/slideNav.es6.min.js";

// Initialize SlideNav
const slideNav = new SlideNav({
	navBoxToggleClass: "active",
	toggleBoxSelector: ".nav",
	speed: 50,
	hideBoxAfterSelect: false
});

// Go to top button for mobile
document.getElementById("scroll-to-top").addEventListener("click", () =>
	slideNav.goToSection("top")
);

// Set the current year in footer
document.getElementById("year").innerText = new Date().getFullYear();