  let list = document.querySelector(".products__section");
  let controls = document.querySelector(".products__slider-arrows");
  let currentIndex = 0;
  
  const slider = (event) => {
    event.preventDefault();
    

    let target = event.target;
    console.log(target);
  
    if (
      target.classList.contains("slider__arrows") ||
      target.closest(".slider__arrows")
      ) {
      if(target.closest(".slider__arrows")){
        target = target.closest(".slider__arrows");
      };

      let targetValue = target.dataset.vector;
  
      if (targetValue == "next") {
        if (currentIndex < list.children.length - 1) {
          currentIndex += 1;
          doTransition(currentIndex);
        } else return;
      }
  
      if (targetValue == "prev") {
        if (currentIndex > 0) {
          currentIndex -= 1;
          doTransition(currentIndex);
        } else return;
      }
    }
  };
  
  function doTransition(index) {
    list.style.transform = `translateX(-${index * 100}%)`;
  }
  
  controls.addEventListener("click", slider);
  