import "./styles.css";

import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

function clearContent() {
    const content = document.getElementById("content");
    content.textContent = "";
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll("nav button");
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
}

function loadTab(loadFn, button) {
    clearContent();
    loadFn();
    setActiveButton(button);
}

const homeBtn = document.querySelector('nav button[data-tab="home"]');
loadTab(loadHome, homeBtn);

const nav = document.querySelector("nav");
nav.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const tab = btn.dataset.tab;

    if (tab === "home") loadTab(loadHome, btn);
    if (tab === "menu") loadTab(loadMenu, btn);
    if (tab === "about") loadTab(loadAbout, btn);
});