function loadAbout() {
  const content = document.getElementById("content");

  const aboutDiv = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "About";

  const phone = document.createElement("p");
  phone.textContent = "0000-0000";

  aboutDiv.appendChild(title);
  aboutDiv.appendChild(phone);
  content.appendChild(aboutDiv);
}

export default loadAbout;
