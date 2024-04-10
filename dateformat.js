//date format
function formatDate(date) {
    var hours = date.getHours() % 12 || 12;
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var monthIndex = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    return hours + ":" + (minutes < 10 ? "0" : "") + minutes + " " + ampm;
}