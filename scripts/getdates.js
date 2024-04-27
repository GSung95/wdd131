document.addEventListener("DOMContentLoaded", function() {
    // Get current year
    var currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    // Get last modified date
    var lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").textContent = "Last modified: " + lastModifiedDate;
});
