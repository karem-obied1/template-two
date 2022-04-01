/* start nav */
let lis1 = document.querySelectorAll("header nav ul li a");
let a = document.querySelector("a");
lis1.forEach((e) => {
  e.onclick = () => {
    lis1.forEach((a) => {
      a.classList.remove("active");
    });
    e.classList.add("active");
  };
});
/* end nav */
/* Start Landing */
let ies = document.querySelectorAll(".landing i");
let lis2 = document.querySelectorAll(".landing li");
let landing = document.querySelector(".landing");
let counter = 2;
ies[0].onclick = function () {
  if (counter > 1) {
    counter--;
    landing.style.background = `url("/images/unnamed${counter}.jpg")`;
    landing.style.backgroundSize = "cover";
    for (let i = 0; i < lis2.length; i++) {
      lis2[i].classList.remove("active1");
    }
    lis2[counter - 1].classList.add("active1");
  }
};
ies[1].onclick = function () {
  if (counter < 3) {
    counter++;
    landing.style.background = `url("/images/unnamed${counter}.jpg")`;
    landing.style.backgroundSize = "cover";
    for (let i = 0; i < lis2.length; i++) {
      lis2[i].classList.remove("active1");
    }
    lis2[counter - 1].classList.add("active1");
  }
};
/* ENd Landing */
/* start up */
let up = document.querySelector(".up");
window.onscroll = () => {
  if (window.scrollY >= 600) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
};
up.onclick = () => {
  window.scrollTo(0, 0);
  up.style.display = "none";
};

/* end up */
