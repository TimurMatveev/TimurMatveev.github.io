var _classes = ["list", "two-colls", "three-colls"];

var _changeClass = function (cls) {
    var element = document.getElementsByClassName("links")[0];
    if (element) {
        _classes.forEach(function (className) {
            element.classList.remove(className);
        });
        element.classList.add(cls);
    }
}

var selectListLayout = function () {
    _changeClass(_classes[0])
}

var selectTwoCollsLayout = function () {
    _changeClass(_classes[1])
}

var selectThreeCollsLayout = function () {
    _changeClass(_classes[2])
}
