
let data = {
    10000000000: 'o', 10000000100: 'O',
    1000000000: 'a', 1000000100: 'A',
    100000000: 't', 100000100: 'T',
    10000000: 'e', 10000100: 'E',
    1000000: 'h', 1000100: 'H',
    100000: 's', 100100: 'S',
    10000: 'n', 10100: 'N',
    1000: 'i', 1100: 'I',
    100: ' ',
    10: '.',
    1: ',',

    110000000: 'r', 110000100: 'R',
    1100000000: 'd', 1100000100: 'D',
    11000000000: 'l', 11000000100: 'L',
    10010000000: 'c', 10010000100: 'C',
    11000: 'u', 11100: 'U',
    110000: 'm', 110100: 'M',
    1100000: 'w', 1100100: 'W',
    1001000: 'f', 1001100: 'F',

    10001000: 'g', 10001100: 'G',
    100010000: 'y', 100010100: 'Y',
    1000100000: 'p', 1000100100: 'P',
    10001000000: 'b', 10001000100: 'B',

    1110000000: 'v', 1110000100: 'V',
    11100000000: 'k', 11100000100: 'K',
    111000: 'j', 111100: 'J',
    1110000: 'x', 1110100: 'X',

    11110000000: 'q', 11110000100: 'Q',
    1111000: 'z', 1111100: 'Z',
}

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
const triggerChord = () => {
    $('#output').append(data[currChord])
}
const genericChordMetaFunctionFactory = (power: number) => (ks: KeyState) => {
    if (ks == KeyState.Pressed) {
        currChord += 10 ** power
        console.log(`Pressed a key, chord: ${currChord}`)
        enableKey(power.toString())
        releasedOneKeyAtLeast = false

    } else if (ks == KeyState.Released) {
        disableKey(power.toString())

        if (!releasedOneKeyAtLeast) {
            console.log(`Released a key, chord ${currChord}`)
            triggerChord()
            releasedOneKeyAtLeast = true
        }

        currChord -= 10 ** power
    }
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
