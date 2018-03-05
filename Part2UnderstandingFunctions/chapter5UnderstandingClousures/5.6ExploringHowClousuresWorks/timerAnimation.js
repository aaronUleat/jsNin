function assert(value, description) {
    var result = value ? "pass" : "fail";
    console.log(result + ' - ' +  description);
};


function animateIt(elementId) {
    var elem = document.getElementById(elementId);
    var tick = 0;
    var timer = setInterval( function () {
       if(tick < 100)
       {
           elem.style.left = elem.style.top = tick + "px";
           tick++;
       }
       else
       {
           clearInterval(timer);
           assert(tick === 100, "Tick accessed via clousure");
           assert( elem, "Element also accessed via a clousure");
           assert(timer, "Timer reference also obtained via a clousure");
       }
    }, 10);
}
animateIt("box1");
animateIt("box2");