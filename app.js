document.addEventListener("DOMContentLoaded", function () {
    // ==================================================
    // References to elements or Global variables
    // ==================================================

    const fccButton = document.getElementById("fcc_test_suite_wrapper");
    const fccButtonToggle = document.getElementById("scriptTest");
    var sidenav = document.querySelectorAll('.sidenav');
    var tooltip = document.querySelectorAll('.tooltipped');
    // Flag for toggle
    var showing = false;
    // Settings for materialize components & initialization
    var instancesSideNav = M.Sidenav.init(sidenav, { edge: "left", draggable: true });
    var instancesTooltip = M.Tooltip.init(tooltip);

    // ==================================================
    // Main Executions
    // ==================================================

    toggleTest();

    // ==================================================
    // Helper Functions
    // ==================================================

    // This function handles the toggle for the test script from freeCodeCamp
    function toggleTest() {
        fccButtonToggle.addEventListener("click", function () {
            if (showing) {
                fccButton.style.display = "none";
                showing = false;
            } else {
                fccButton.style.display = "block";
                showing = true;
            }
        });
    };
});