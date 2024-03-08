const radio = document.querySelectorAll(".radioBtn");

radio.forEach((el) =>
  el.addEventListener("click", function (e) {
    const clicked = e.target.closest(".radioBtn");
    if (!clicked) return;
    document
      .querySelectorAll(".innerRadio")
      .forEach((el) => el.classList.remove("radioActive"));
    document
      .querySelectorAll(".tab")
      .forEach((el) => el.classList.remove("active"));

    console.log(clicked);
    clicked.querySelector(".innerRadio").classList.add("radioActive");
    clicked.closest(".tab").classList.add("active");
  })
);
