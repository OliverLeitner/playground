/**
 * content columns same height
 * no need for jquery...
 */
var content = document.getElementById("maincontent");
var scHeight = content.scrollHeight;
var oHeight = content.offsetHeight;
// scrollheight - offsetheight
var height = scHeight - oHeight;
var columns = document.getElementsByClassName('flex-item');
for (let item of columns) {
    item.setAttribute('style', 'padding-bottom:' + height + 'px;margin-bottom:-' + height + 'px;');
}