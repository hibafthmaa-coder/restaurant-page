
    export default function createMenuPage() {
    const  menu= document.createElement("h1");
    menu.textContent = "Our menu";
    const content = document.createElement("div");
    content.appendChild(menu);
    return content;
    }