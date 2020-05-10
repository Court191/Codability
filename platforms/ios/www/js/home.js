/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("social").style.width = "100%";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("social").style.width = "0";
}
function openNotes() {
  document.getElementById("note").style.width = "100%";
  document.getElementById("main").style.marginRight = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNotes() {
  document.getElementById("note").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
}