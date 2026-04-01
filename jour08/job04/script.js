const toggleBtn = document.getElementById("theme-toggle");
const html = document.documentElement;
const icon = document.getElementById("theme-icon");

toggleBtn.addEventListener("click", () => {
    html.classList.toggle("dark");
    if (html.classList.contains("dark")) {
        icon.classList.add("text-yellow-300");
        icon.classList.remove("text-gray-800");
    } else {
        icon.classList.add("text-gray-800");
        icon.classList.remove("text-yellow-300");
    }
});