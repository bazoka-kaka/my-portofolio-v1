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
