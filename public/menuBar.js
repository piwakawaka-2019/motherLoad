$(document).ready(() => {
  const tabs = $(".tabs");
  const selector = $(".tabs").find("a").length;

  //const selector = $(".tabs").find(".selector");

  const activeItem = tabs.find(".active");

  const activeWidth = activeItem.innerWidth();
  $(".selector").css({
    left: activeItem.position.left + "px",
    width: activeWidth + "px"
  });

  $(".tabs").on("click", "a", function(e) {
    $(".tabs a").removeClass("active");
    $(this).addClass("active");

    const activeWidth = $(this).innerWidth();
    const itemPos = $(this).position();

    $(".selector").css({
      left: itemPos.left + "px",
      width: activeWidth + "px"
    });
  });
});
