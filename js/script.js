let menu = document.getElementById("menu-bars");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menu.classList.toggle("fa-times");
});
window.addEventListener("scroll", () => {
  navbar.classList.remove("active");
  menu.classList.remove("fa-times");
});

// bookmark page
function bookmark(e) {
  if (window.sidebar && window.sidebar.addPanel) {
    // Mozilla Firefox Bookmark
    window.sidebar.addPanel(document.title, window.location.href, "");
  } else if (window.external && "AddFavorite" in window.external) {
    // IE Favorite
    window.external.AddFavorite(location.href, document.title);
  } else if (window.opera && window.print) {
    // Opera Hotlist
    this.title = document.title;
    return true;
  } else {
    // webkit - safari/chrome
    alert(
      "Press " +
        (navigator.userAgent.toLowerCase().indexOf("mac") != -1 ? "Command/Cmd" : "CTRL") +
        " + D to bookmark this page."
    );
  }
}
