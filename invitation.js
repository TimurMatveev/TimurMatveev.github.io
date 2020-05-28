const invitationEl = document.querySelector('.invitation');

(() => {
    let angleDeltaX = 0,
        angleDeltaY = 0,
        maxAngleDelta = 10;

    function updateTransformStyles() {
        invitationEl.style.transform =
            `rotateX(${ angleDeltaX }deg) rotateY(${ angleDeltaY }deg)`;
    }

    function evaluateAngleDelta(size, point) {
        return maxAngleDelta * 2 * (point - size / 2) / size;
    }

    function moveHandler(event) {
        angleDeltaY = -evaluateAngleDelta(document.body.clientWidth, event.clientX);
        angleDeltaX = evaluateAngleDelta(document.body.clientHeight, event.clientY);
        updateTransformStyles();
    }

    document.body.addEventListener('touchmove', moveHandler);
    document.body.addEventListener('mousemove', moveHandler);
})();
