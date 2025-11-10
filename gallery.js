$(document).ready(function() {
  $("#thumbs img").hover(
    function() {
      $(this).css({
        "border": "2px solid darkgreen",
        "box-shadow": "0 0 10px darkgreen"
      });
    },
    function() {
      $(this).css({
        "border": "",
        "box-shadow": ""
      });
    }
  );

  $("#thumbs img").click(function() {
    var newSrc = $(this).attr("src");
    var newAlt = $(this).attr("alt");
    $("#lgPic").attr("src", newSrc);
    $("#lgTitle").text(newAlt);
  });

  $("#lgPic").click(function() {
    var imgSrc = $(this).attr("src");
    window.open(imgSrc, "_blank");
  });
});
