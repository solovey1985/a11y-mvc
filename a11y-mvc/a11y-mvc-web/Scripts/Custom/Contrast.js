$(document).ready(() => {
    const KEY = "accSettings";
    const settings = readStorage();

    var isContrastOn = settings.isContrastOn;
    var scale = parseInt(settings.scale);
    const maxScale = 4;

    if (isContrastOn) {
        applyContrast();
    }
    if (scale > 0) {
        // Move to the method
        var headers = document.querySelectorAll("h3,h1,h2,p,a");
        for (let i = 0; i < headers.length; i++) {
            let el = headers[i];
            let style = window.getComputedStyle(el, null).getPropertyValue('font-size');
            let font = parseFloat(style);
            el.style.fontSize = (font + 4 * scale) + 'px';
        }
    }


    $("#ContrastButton").click(function () {
        const st = document.head.querySelector("#atUser");
        if (isContrastOn) {
            st.remove();
        } else {
            applyContrast();
        }
        isContrastOn = !isContrastOn;
        writeStorage();
    });

    $("#FontPlusButton").click(function () {
        console.log("1 scale : ", scale);
        if (scale <= maxScale) {
            var headers = document.querySelectorAll("h3,h1,h2,p,a");
            for (let i = 0; i < headers.length; i++) {
                let el = headers[i];
                let style = window.getComputedStyle(el, null).getPropertyValue('font-size');
                let font = parseFloat(style);
                el.style.fontSize = (font + 4) + 'px';
            }
            scale++;
            writeStorage();
        }
    });

    $("#FontMinusButton").click(function () {
        if (scale > 0) {
            var headers = document.querySelectorAll("h3,h1,h2,p,a");
            for (let i = 0; i < headers.length; i++) {

                let el = headers[i];
                let style = $(el).css("font-size");
                let font = parseFloat(style);

                $(el).css("font-size", (font - 4) + "px");
            }
            scale--;
            writeStorage();
        }
    });

    function applyContrast() {
        const link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("id", "atUser");
        link.setAttribute("type", "text/css");
        link.setAttribute("href", "Scripts/Angular/assets/style-a11y.css")
        document.head.appendChild(link);
    }

    function writeStorage() {
        window.localStorage.setItem(KEY, JSON.stringify({ isContrastOn: isContrastOn, scale: scale }));
    }

    function readStorage() {
        const value = window.localStorage.getItem(KEY);
        if (value) {
            return JSON.parse(value);
        }
        else {
            return { isContrastOn: false, scale: 0 };
        }
    }
});

