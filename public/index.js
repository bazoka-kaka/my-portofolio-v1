let menuShowing = false;
if (window.innerWidth <= 700) {
  $(".fa-bars").click(function () {
    if (!menuShowing) {
      $("nav ul").animate({ right: 0 });
      menuShowing = true;
    } else {
      $("nav ul").animate({ right: "100vw" });
      menuShowing = false;
    }
  });

  $("nav a").click(function () {
    $("nav ul").animate({ right: "100vw" });
    menuShowing = false;
  });
} else {
  $("nav ul").css("right", "0");
  menuShowing = true;
}

const showBtn = document.querySelector(".show-all");
const hiddens = document.querySelectorAll(".hidden");
showBtn.addEventListener("click", () => {
  if (showBtn.innerHTML === "Show More") {
    showBtn.innerHTML = "Show Less";
  } else {
    showBtn.innerHTML = "Show More";
  }

  hiddens.forEach((a) => {
    a.classList.toggle("hidden");
  });
});
