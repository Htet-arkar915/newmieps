const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("active");
  menu.classList.toggle("active");
});

window.addEventListener("DOMContentLoaded", function () {
  setDefaultContent();
});

function setDefaultContent() {
  var defaultContent = document.getElementById("content");
  defaultContent.style.display = "block";

  var otherContents = document.querySelectorAll(
    '[id^="content"]:not(#content)'
  );
  for (var i = 0; i < otherContents.length; i++) {
    otherContents[i].style.display = "none";
  }
}

function changeContent(contentId) {
  var defaultContent = document.getElementById("content");
  defaultContent.style.display = "none";

  var containerDoc = document.getElementById("edu-right");
  var otherContents = containerDoc.querySelectorAll("div");
  for (var i = 0; i < otherContents.length; i++) {
    otherContents[i].style.display = "none";
  }
  var selectedContent = document.getElementById(contentId);
  if (selectedContent) {
    selectedContent.style.display = "block";
  }
}
