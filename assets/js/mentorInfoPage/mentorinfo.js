const tabsDetailsContainer = document.querySelector(".tabs__container");
const tabsDetails = document.querySelectorAll(".tab__details");
const tabsDetailsContent = document.querySelectorAll(".details__content");

const tabsSessionsContainer = document.querySelector(
  ".tabs__container--sessions"
);
const tabsSessions = document.querySelectorAll(".tab__sessions");
const tabsSessionsContent = document.querySelectorAll(".sessions__content");

//
const tabsHandle = function (tabs, clicked) {
  //tabs
  tabs.forEach((t) => {
    t.classList.remove("tab--active");
    t.querySelector("p").classList.remove("tab--active");
    t.querySelector("p").classList.add("tab-p");
    t.querySelector("span")?.classList.remove("review--active");
  });
  clicked.classList.add("tab--active");
  clicked.querySelector("p").classList.remove("tab-p");
  clicked.querySelector("p").classList.add("tab--active");
  clicked.querySelector("span")?.classList.add("review--active");
};
const contentHandle = function (tabsContent, clicked) {
  tabsContent.forEach((t) => t.classList.remove("details__content--active"));
  document
    .querySelector(`.details__content--${clicked.dataset.tab}`)
    .classList.add("details__content--active");
};

tabsDetailsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tab__details");
  if (!clicked) return;

  //tabs
  tabsHandle(tabsDetails, clicked);

  // content
  contentHandle(tabsDetailsContent, clicked);
});

tabsSessionsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tab__sessions");
  if (!clicked) return;

  // tabs
  tabsHandle(tabsSessions, clicked);

  // content
  contentHandle(tabsSessionsContent, clicked);
});

// READMORE function
function readMore() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
  }
}

////////////////// booking session /////////////////////
const book = document.querySelectorAll(".bookBtn");
const close = document.querySelector(".closeBtn");
const overLay = document.querySelector(".overlay");
const bookingForm = document.querySelector(".booking");

book.forEach((el) =>
  el.addEventListener("click", function () {
    bookingForm.classList.remove("hidden");
    overLay.classList.remove("hidden");
  })
);
close.addEventListener("click", function () {
  bookingForm.classList.add("hidden");
  overLay.classList.add("hidden");
});

//////////////////// calendar /////////////////////
const daysTag = document.querySelector(".days"),
  currentDate = document.querySelector(".current-date"),
  prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

// storing full name of all months in array
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
  let liTag = "";

  for (let i = firstDayofMonth; i > 0; i--) {
    // creating li of previous month last days
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    // creating li of all days of current month
    // adding active class to li if the current day, month, and year matched
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    // creating li of next month first days
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
  daysTag.innerHTML = liTag;
};
renderCalendar();

prevNextIcon.forEach((icon) => {
  // getting prev and next icons
  icon.addEventListener("click", () => {
    // adding click event on both icons
    // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
      // if current month is less than 0 or greater than 11
      // creating a new date of current year & month and pass it as date value
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear(); // updating current year with new date year
      currMonth = date.getMonth(); // updating current month with new date month
    } else {
      date = new Date(); // pass the current date as date value
    }
    renderCalendar(); // calling renderCalendar function
  });
});
