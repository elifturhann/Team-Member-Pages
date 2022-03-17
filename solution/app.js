const btn = document.getElementById("flexSwitchCheckDefault");

btn.addEventListener('change',myFunction)

function myFunction(){
    const element = document.querySelector(".main_container");
    element.classList.toggle("dark_mode");
}