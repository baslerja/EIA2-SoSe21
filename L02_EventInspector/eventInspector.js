"use strict";
var L02_EventInspector;
(function (L02_EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        //console.log("start");
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let span = document.querySelector("#span");
        let position = "x: " + x + " y: " + y;
        let eventTarget = _event.target;
        span.innerHTML = position + "<br>" + eventTarget;
        span.style.left = x + "px";
        span.style.top = y + "px";
    }
    function logInfo(_event) {
        console.log("event type: " + _event.type);
        console.log("event target: " + _event.target);
        console.log("current target: " + _event.currentTarget);
        console.log("event object: " + _event);
    }
})(L02_EventInspector || (L02_EventInspector = {}));
//# sourceMappingURL=eventInspector.js.map