const enableKey = (keynum: string) => {
    $('#keeb-f' + keynum).addClass('active')
}
const disableKey = (keynum: string) => {
    $('#keeb-f' + keynum).removeClass('active')
}
enum KeyState {
    Pressed = 0,
    Released = 1,
}
let currChord = 0
let releasedOneKeyAtLeast = false
const genericChordMetaFunctionFactory = (power: number) => (ks: KeyState) => {
    if (ks == KeyState.Pressed) {
        currChord += 10 ** power
        console.log(`Pressed a key, chord: ${currChord}`)
        enableKey(power.toString())
        releasedOneKeyAtLeast = false

    } else if (ks == KeyState.Released) {
        disableKey(power.toString())
        currChord -= 10 ** power
        console.log(`Released a key, chord ${currChord}`)
    } else if (!releasedOneKeyAtLeast) {
        releasedOneKeyAtLeast = true
    } else if (releasedOneKeyAtLeast)
        return
}
const theKeys = {
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
    v: genericChordMetaFunctionFactory(0),
}
const genericKeyProcessorFunctionFactory = (f) => (e) => {
    if (e.repeat || !(e.key in theKeys)) return
    f(e)
}
document.addEventListener('keydown',
    genericKeyProcessorFunctionFactory((e) => {
        theKeys[e.key](KeyState.Pressed)
    }))
document.addEventListener('keyup',
    genericKeyProcessorFunctionFactory((e) => {
        theKeys[e.key](KeyState.Released)
    }))
