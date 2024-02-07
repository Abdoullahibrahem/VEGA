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
