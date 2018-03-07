var request = new XMLHttpRequest();
request.open('GET', 'http://freegeoip.net/json/github.com', true);

request.onload = function() {
if (request.status >= 200 && request.status < 400) {
// Success!
var data = JSON.parse(request.responseText).city;
console.log(data)

} else {
// We reached our target server, but it returned an error

}
};
request.send();