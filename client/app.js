async function getMessage() {
  const response = await fetch("https://server-b6vx.onrender.com/");

  const message = await response.json();

  const app = document.getElementById("app");
  app.textContent = message;
}

getMessage();
