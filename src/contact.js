export default function createContactPage() {
    const contact = document.createElement("h1");
    contact.textContent = "Contact Us";
    const content = document.createElement("div");
    content.appendChild(contact);
    return content;
}