document.addEventListener("DOMContentLoaded", function () {
    console.log("App.js working.")

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, { edge: "right", draggable: true });

});