function loadHome() {
  const content = document.getElementById("content");

  const homeDiv = document.createElement("div");

  const headline = document.createElement("h1");
  headline.textContent = "Odin Restaurant";

  const description = document.createElement("p");
  description.textContent = "Welcome to our restaurant!";

  homeDiv.appendChild(headline);
  homeDiv.appendChild(description);
  content.appendChild(homeDiv);
}

export default loadHome;
