document.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var navbarLinks = document.querySelectorAll(".navbar a");
  var sections = document.querySelectorAll(".section");
  var scrollPosition = window.scrollY;

  sections.forEach(function (section) {
    var sectionTop = section.offsetTop - 50;
    var sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      var sectionId = section.getAttribute("id");
      navbarLinks.forEach(function (link) {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === sectionId) {
          link.classList.add("active");
        }
      });
    }
  });
});

document.addEventListener("scroll", function () {
  const homeSection = document.getElementById("home");
  const aboutUsSection = document.getElementById("about");
  const gallerySection = document.getElementById("gallery");
  const announcementSection = document.getElementById("announcement");
  const navigationBar = document.getElementById("nav");

  const homeOffset = homeSection.offsetTop;
  const aboutUsOffset = aboutUsSection.offsetTop;
  const galleryOffset = gallerySection.offsetTop;
  const announcementOffset = announcementSection.offsetTop;

  if (window.scrollY >= announcementOffset - navigationBar.offsetHeight) {
    navigationBar.style.backgroundColor = "green";
  } else if (window.scrollY >= galleryOffset - navigationBar.offsetHeight) {
    navigationBar.style.backgroundColor = "grey";
  } else if (window.scrollY >= aboutUsOffset - navigationBar.offsetHeight) {
    navigationBar.style.backgroundColor = "#729762";
  } else {
    navigationBar.style.backgroundColor = "#20436f";
  }
});

function openSidebar() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("overlay").style.display = "block";
}

function closeSidebar() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("overlay").style.display = "none";
}
