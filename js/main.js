const input = document.getElementById("inputValue");
const button = document.getElementById("fetchBtn");
const output = document.getElementById("output");

button.addEventListener("click", async () => {
  const seed = input.value.trim();
  if (!seed) {
    output.textContent = "Please enter a seed.";
    return;
  }

  const targetUrl = `https://archipelago.gg/dl_spoiler/${seed}`;
  const proxyUrl = `https://corsproxy.io/?${targetUrl}`;

  output.textContent = "Loading...";

  try {
    const response = await fetch(proxyUrl);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const text = await response.text();
    output.textContent = text;

  } catch (err) {
    output.textContent = `Error: ${err.message}`;
  }
});
