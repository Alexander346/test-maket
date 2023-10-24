let mainContent = document.querySelectorAll(".mainButtons");

mainContent.forEach(function (button) {
  button.addEventListener("click", function () {
    let targetElementId = button.getAttribute("data-target");
    let targetElement = document.getElementById(targetElementId);
    let arrow = button.querySelector(".arrow");

    if (targetElement.classList.contains("hidden")) {
      closeAllElements();


      arrow.classList.add("rotate-up");

      targetElement.style.maxHeight = targetElement.scrollHeight + "px";
      targetElement.classList.remove("hidden");
    } else {

      arrow.classList.add("rotate-down");

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
    let arrow = element.querySelector(".arrow");

    arrow.classList.remove("rotate-up");
    arrow.classList.remove("rotate-down");

    targetElement.style.maxHeight = null;
    targetElement.classList.add("hidden");
  });
}
