document.addEventListener("DOMContentLoaded", function() {
    const searchBox = document.getElementById("searchBox");
    const content = document.getElementById("content");
    const sections = content.getElementsByClassName("section-container");

    searchBox.addEventListener("input", function() {
        const query = searchBox.value.toLowerCase();
        for (let section of sections) {
            const text = section.innerText.toLowerCase();
            if (text.includes(query)) {
                section.style.display = "";
            } else {
                section.style.display = "none";
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll(".section-header");

    headers.forEach(header => {
        header.addEventListener("click", function() {
            const content = header.nextElementSibling;
            const icon = header.querySelector(".toggle-icon");

            if (content.style.display === "block") {
                content.style.display = "none";
                icon.textContent = "+";
            } else {
                content.style.display = "block";
                icon.textContent = "-";
            }
        });
    });
});
