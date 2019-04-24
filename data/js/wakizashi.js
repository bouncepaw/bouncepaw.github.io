var enableKey = function (keynum) {
    $('#keeb-f' + keynum).addClass('active');
};
var disableKey = function (keynum) {
    $('#keeb-f' + keynum).removeClass('active');
};
var KeyState;
(function (KeyState) {
    KeyState[KeyState["Pressed"] = 0] = "Pressed";
    KeyState[KeyState["Released"] = 1] = "Released";
})(KeyState || (KeyState = {}));
var currChord = 0;
var releasedOneKeyAtLeast = false;
var genericChordMetaFunctionFactory = function (power) { return function (ks) {
    if (ks == KeyState.Pressed) {
        currChord += Math.pow(10, power);
        console.log("Pressed a key, chord: " + currChord);
        enableKey(power.toString());
        releasedOneKeyAtLeast = false;
    }
    else if (ks == KeyState.Released) {
        disableKey(power.toString());
        currChord -= Math.pow(10, power);
        console.log("Released a key, chord " + currChord);
    }
    else if (!releasedOneKeyAtLeast) {
        releasedOneKeyAtLeast = true;
    }
    else if (releasedOneKeyAtLeast)
        return;
}; };
var theKeys = {
    q: genericChordMetaFunctionFactory(10),
    w: genericChordMetaFunctionFactory(9),
    e: genericChordMetaFunctionFactory(8),
    r: genericChordMetaFunctionFactory(7),
    a: genericChordMetaFunctionFactory(6),
    s: genericChordMetaFunctionFactory(5),
    d: genericChordMetaFunctionFactory(4),
    f: genericChordMetaFunctionFactory(3),
    x: genericChordMetaFunctionFactory(2),
    c: genericChordMetaFunctionFactory(1),
    v: genericChordMetaFunctionFactory(0)
};
var genericKeyProcessorFunctionFactory = function (f) { return function (e) {
    if (e.repeat || !(e.key in theKeys))
        return;
    f(e);
}; };
document.addEventListener('keydown', genericKeyProcessorFunctionFactory(function (e) {
    theKeys[e.key](KeyState.Pressed);
}));
document.addEventListener('keyup', genericKeyProcessorFunctionFactory(function (e) {
    theKeys[e.key](KeyState.Released);
}));
