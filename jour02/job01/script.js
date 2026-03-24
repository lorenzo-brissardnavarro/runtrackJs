function citation() {
    const text_citation = document.getElementById("citation");
    console.log(text_citation.textContent);
}

const text_citation = document.getElementById("citation");
const btn = document.getElementById("button");
btn.addEventListener("click", () => {
    console.log(text_citation.textContent);
})