const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("mouseover", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// //////////////////////

// const nextButton = document.querySelector("#next");
// const prevButton = document.querySelector("#prev");

// // const glide = new Glide("#glide", config);

// nextButton.addEventListener("click", function (event) {
//   event.preventDefault();

//   glide.go(">");
// });

// prevButton.addEventListener("click", function (event) {
//   event.preventDefault();

//   glide.go("<");
// });
