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
        event.preventDefault();
        event.stopPropagation();
        const { clientX, clientY } = event.touches ? event.touches[0] : event;
        angleDeltaY = -evaluateAngleDelta(document.body.clientWidth, clientX);
        angleDeltaX = evaluateAngleDelta(document.body.clientHeight, clientY);
        updateTransformStyles();
    }

    document.body.addEventListener('touchmove', moveHandler);
    document.body.addEventListener('mousemove', moveHandler);
})();
