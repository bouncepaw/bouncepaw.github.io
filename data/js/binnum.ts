const output = {
    el: document.getElementById('output'),
    replace: (digit: string) => this.el.innerHTML += digit,
}
let buffer = {
    writingNow: true,
    one: false,
    two: false,
    three: false,
    four: false,
    register: (digit: string, state: boolean) => {
        console.log(`Register ${state} keypress of ${digit}`)
        this.writingNow = state ? true : false
        switch (digit) {
            case "1":
                this.one = state ? true : false
                break
            case "2":
                this.two = state ? true : false
                break
            case "3":
                this.three = state ? true : false
                break
            case "4":
                this.four = state ? true : false
                break
        }
        return this
    },
    getNumber: (): string => {
        // 0000 0001 0010 0011 0100 0101 0110 0111
        //  N/A    1    2    3    4    5    6    7
        // 1000 1001 1010 1011 1100 1101 1110 1111
        //    8    9  N/A  N/A  N/A  N/A  N/A    0
        if (!this.one) {
            if (!this.two) {
                if (!this.three && this.four) return "1"
                if (this.three && !this.four) return "2"
                if (this.three && this.four) return "3"
            } else if (this.two) {
                if (!this.three && !this.four) return "4"
                if (!this.three && this.four) return "5"
                if (this.three && !this.four) return "6"
                if (this.three && this.four) return "7"
            }
        } else if (this.one) {
            if (!this.two && !this.three && !this.four) return "8"
            if (!this.two && !this.three && this.four) return "9"
            if (this.two && this.three && this.four) return "0"
        }
        return "error "
    },
    tryPrint: () => {
        if (this.writingNow) output.replace(this.getNumber())
    }
}
document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4")
        buffer.register(e.key, true)
    else
        console.log("A different key was pressed down")
})
document.addEventListener('keyup', (e: KeyboardEvent) => {
    if (e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4")
        buffer.register(e.key, false).tryPrint()
})
