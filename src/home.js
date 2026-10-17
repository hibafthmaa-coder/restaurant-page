export default function createHomePage() {
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Our Restaurant";

    const content = document.createElement("div");
    content.appendChild(heading);

    const paragraph = document.createElement("p");
    paragraph.textContent = "Delicious food, made with love!";
    content.appendChild(paragraph);

    return content;
}