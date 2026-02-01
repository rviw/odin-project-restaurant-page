import "./styles.css";

import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

function clearContent() {
    const content = document.getElementById("content");
    content.textContent = "";
}

loadHome();

const buttons = document.querySelectorAll("nav button");

buttons[0].addEventListener("click", () => {
    clearContent();
    loadHome();
});

buttons[1].addEventListener("click", () => {
    clearContent();
    loadMenu();
});

buttons[2].addEventListener("click", () => {
    clearContent();
    loadAbout();
});