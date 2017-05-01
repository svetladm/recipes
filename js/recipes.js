'use strict';
console.log($(".image-small"));
$(".image-small").click(function (event) {
  $("#image-placeholder").attr("src", $(this).find("img").attr("src"));
  return false;
});
