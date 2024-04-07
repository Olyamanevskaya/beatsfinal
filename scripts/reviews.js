const reviewsBar = document.querySelector(".reviews__switcher");
const reviewsItems = document.querySelectorAll(".reviews__switcher-item");
const reviewWrapp = document.querySelectorAll(".reviews__display");

reviewsBar.addEventListener("click", (e) => {
  e.preventDefault();

  const target = e.target;

  if (
    target.classList.contains("interactive-avatar__link") ||
    target.closest(".interactive-avatar__link") ||
    target.classList.contains("reviews__switcher-item")
    )
  {
    if (target.classList.contains("reviews__switcher-item")) {
      target = target.querySelector(".interactive-avatar__link");
    }

    const currentPeopleLink = target;
    const currentPeopleItem = currentPeopleLink.closest(".reviews__switcher-item");
    const currentPeopleId = currentPeopleItem.id;

    for (const iterator of reviewsItems) {
      if (iterator !== currentPeopleItem) {
        iterator.classList.remove("interactive-avatar--active");
      }
    }

    if (
      !currentPeopleItem.classList.contains("interactive-avatar--active")
    ) {
      currentPeopleItem.classList.add("interactive-avatar--active");
    }

    reviewWrapp.forEach(function (wrapp) {
      if (currentPeopleId == wrapp.id) {
        wrapp.classList.add("active");
      } else {
        wrapp.classList.remove("active");
      }
    });
  }
});