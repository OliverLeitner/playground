/**
 * content columns same height
 * no need for jquery...
 */
var content = document.getElementById("maincontent");
var scHeight = content.scrollHeight;
var height = scHeight - content.clientHeight;

// firefox does stuff a little bit different
var browser = navigator.userAgent;
if (!browser.includes("Chrome")) {
    console.log("we are firefox");
    height = height + 300;
}

// scrollheight - offsetheight
var columns = document.getElementsByClassName('flex-item');
for (let item of columns) {
    item.setAttribute('style', 'padding-bottom:' + height + 'px;margin-bottom:-' + height + 'px;');
}