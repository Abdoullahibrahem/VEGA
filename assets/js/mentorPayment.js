const radio = document.querySelectorAll(".radioBtn");
const form = document.querySelectorAll(".payment-form");

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

    form.forEach((el) => el.classList.add("hidden"));

    // handling tabs
    clicked.querySelector(".innerRadio").classList.add("radioActive");
    clicked.closest(".tab").classList.add("active");

    // handling content
    console.log(clicked);
    console.log(clicked.dataset.tab);
    document
      .querySelector(`#form-${clicked.dataset.tab}`)
      .classList.remove("hidden");
  })
);

// payment form validation
// const cardName = document.getElementById("card-name");
// const cardNum = document.getElementById("card-num");
// const expire = document.getElementById("expire");
// const cvc = document.getElementById("CVC");
// const submitBtn = document.querySelector(".submitBtn");

// submitBtn.addEventListener("submit", function (e) {
//   e.preventDefault();
//   if ((cardName.value = "")) {
//     console.log("submitted");
//   }
// });
// function cardnumber(inputtxt) {
//   var cardno = /^(?:3[47][0-9]{13})$/;
//   if (inputtxt.value.match(cardno)) {
//     return true;
//   } else {
//     alert("Not a valid Amercican Express credit card number!");
//     return false;
//   }
// }

// display session details in payment confirmation
const sessionDetailsContainer = document.querySelector(
  ".session__details--container"
);
const dateTime = localStorage.getItem("dateAndTime").split(",");
const renderSessionDetails = function () {
  const html = `
    <h5 class="">Session Details</h5>
    <h2>200 EGP</h2>
    <p class="m-0 text-muted">Mentor:</p>
    <div class="session-mentordata">
        <img
        src="assets/images/heroPerson1.jpg"
        class="float-start me-2 mt-1"
        alt="..."
        />
        <div class="d-flex flex-column gap-1">
        <h6 class="m-0">Mariam Gamal</h6>
        <p class="m-0 text-muted">Ux Leader & Career Coach at Ex-Adobe</p>
        </div>
    </div>
    <div class="mt-4">
            <img
              src="assets/images/MentorInfoPage/tag.png"
              class="float-start me-2 mt-1"
              alt="..."
            />
            <div class="d-flex flex-column gap-1">
              <h6 class="m-0">Portfolio Review</h6>
              <p class="m-0 text-muted">Topic</p>
            </div>
          </div>
          <div class="mt-2">
            <img
              src="assets/images/MentorInfoPage/clockIcon.png"
              class="float-start me-2 mt-1"
              alt="..."
            />
            <div class="d-flex flex-column gap-1">
              <h6 class="m-0">${dateTime[1]}</h6>
              <p class="m-0 text-muted">Time</p>
            </div>
          </div>
          <div class="mt-2">
            <img
              src="assets/images/MentorInfoPage/timer.png"
              class="float-start me-2 mt-1"
              alt="..."
            />
            <div class="d-flex flex-column gap-1">
              <h6 class="m-0">30 minutes</h6>
              <p class="m-0 text-muted">Duration</p>
            </div>
          </div>
          <div class="mt-2">
            <img
              src="assets/images/MentorInfoPage/calendar.png"
              class="float-start me-2 mt-1"
              alt="..."
            />
            <div class="d-flex flex-column gap-1">
              <h6 class="m-0">${dateTime[0].split(" ")[2]} ${
    dateTime[0].split(" ")[1]
  }</h6>
              <p class="m-0 text-muted">Date</p>
            </div>
          </div>`;
  sessionDetailsContainer.insertAdjacentHTML("afterbegin", html);
};
renderSessionDetails();
