// Function to detect URLs in text
function makeLinksClickable(text) {
    var urlPattern = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(urlPattern, function(url) {
        return '<a href="' + url + '" target="_blank">' + url + '</a>';
    });
}