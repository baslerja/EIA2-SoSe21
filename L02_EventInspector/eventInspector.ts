namespace L02_EventInspector {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        //console.log("start");
        document.addEventListener("mousemove", setInfoBox);
       
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);

        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
    }

    function setInfoBox(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;

        let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("#span");
        let position: string = "x: " + x + " y: " + y;
        let eventTarget: EventTarget = <EventTarget>_event.target;

        span.innerHTML = position + "<br>" + eventTarget;
        span.style.left = x + "px";
        span.style.top = y + "px";
    }

    function logInfo(_event: Event): void {
        console.log("event type: " + _event.type);
        console.log("event target: " + _event.target);
        console.log("current target: " + _event.currentTarget);
        console.log("event object: " + _event);
    }
}