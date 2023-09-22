/****************************************************************************
**
**
**
**
****************************************************************************/

var vp = currentVs();

function setVp() {
    vp = currentVs();
}

function currentWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

function currentHeight() {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    );
}

function currentVs() {
    var currWidth = currentWidth();
    var currHeight = currentHeight();
//    console.log("width: ", currWidth);
//    console.log("height: ", currHeight);
    if (((currWidth * 100) / 1920) < ((currHeight * 100) / 968))
        return currWidth / 1920;
    else
        return currHeight / 968;
}

// View width, height
function vs(size) {
    return Math.ceil(size * vp);
}

function vspx(size) {
    return (Math.ceil(size * vp)) + "px";
}

//window.onresize = function () {
//    vp = currentVs();
//}

//window.addEventListener("resize", function() {
//    console.log("resize");
//});

var uniqueRandoms = [];
var numRandoms = 5;
function makeUniqueRandom() {
    // refill the array if needed
    if (!uniqueRandoms.length) {
        for (var i = 0; i < numRandoms; i++) {
            uniqueRandoms.push(i);
        }
    }
    var index = Math.floor(Math.random() * uniqueRandoms.length);
    var val = uniqueRandoms[index];

    // now remove that value from the array
    uniqueRandoms.splice(index, 1);

    return val;

}

export {
    currentWidth,
    currentHeight,
    currentVs,
    vs,
    vspx,
    setVp
};
