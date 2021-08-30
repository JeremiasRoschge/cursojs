const bdark = document.querySelector("#bdark");
const body = document.querySelector("body");

bdark.addEventListener("darkmode", (e) =>{
    body.classList.toggle("darkmode");
});

