const input = document.getElementById("inputValue");
const button = document.getElementById("fetchBtn");
const output = document.getElementById("output");

console.log("Alpha");

button.addEventListener("click", async () => {
    console.log("Bravo");
    const value = input.value.trim();
    if (!value) {
        output.textContent = "Please enter a value.";
        return;
    }

    // Example URL construction
    const url = `https://corsproxy.io/?https://archipelago.gg/dl_spoiler/${value}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const text = await response.text();
        output.textContent = text;

        console.log("Charlie");
    } catch (err) {
        output.textContent = `Error: ${err.message}`;
        console.log("Delta");
    }
});
