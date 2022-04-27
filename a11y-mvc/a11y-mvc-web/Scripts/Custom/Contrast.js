$(document).ready(() => {
    var contrast = JSON.parse(window.localStorage.getItem("contrast"));
    if (contrast) {
        console.log(contrast.isEnabled);
    }

    $("#ContrastButton").click(function () {
        var headers = document.querySelectorAll("h3,h1,h2,p,a");
        for (let i = 0; i < headers.length; i++) {

            let el = headers[i];
            let style = window.getComputedStyle(el, null).getPropertyValue('font-size');
            let font = parseFloat(style);

            el.style.fontSize = (font + 1) + 'px';
        }

        window.localStorage.setItem("contrast", JSON.stringify({ "isEnabled": true }))
    });
});