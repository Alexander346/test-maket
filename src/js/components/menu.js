let mainContent = document.querySelectorAll(".mainButtons");

mainContent.forEach(function (button) {
    button.addEventListener("click", function () {
        let targetElementId = button.getAttribute("data-target");
        let targetElement = document.getElementById(targetElementId);

        if (targetElement.classList.contains("hidden")) {

            closeAllElements();
            targetElement.style.maxHeight = targetElement.scrollHeight + "px";
            targetElement.classList.remove("hidden");
        } else {
            targetElement.style.maxHeight = null;
            targetElement.classList.add("hidden");
        }
    });
});

function closeAllElements() {
    let elements = document.querySelectorAll(".mainButtons");
    elements.forEach(function (element) {
        let targetId = element.getAttribute("data-target");
        let targetElement = document.getElementById(targetId);
        targetElement.style.maxHeight = null;
        targetElement.classList.add("hidden");
    });
}
