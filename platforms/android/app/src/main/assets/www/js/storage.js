// Remember that user is logged in
window.onload = function() {
    var storedValue = localStorage.getItem("username");

    if (storedValue !== null) {
        window.location.href = "home.html";
    }
}