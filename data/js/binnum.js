var buffer = {
    writingNow: true,
    one: false,
    two: false,
    three: false,
    four: false,
    register: function (digit, state) {
        console.log("Register " + state + " keypress of " + digit);
        this.writingNow = state;
        switch (digit) {
            case "1":
                this.one = state;
                break;
            case "2":
                this.two = state;
                break;
            case "3":
                this.three = state;
                break;
            case "4":
                this.four = state;
                break;
        }
        console.log("Now: " + this.one + " " + this.two + " " + this.three + " " + this.four);
        return this;
    },
    getNumber: function () {
        // 0000 0001 0010 0011 0100 0101 0110 0111
        //  N/A    1    2    3    4    5    6    7
        // 1000 1001 1010 1011 1100 1101 1110 1111
        //    8    9  N/A  N/A  N/A  N/A  N/A    0
        var tmp = (this.one ? 1000 : 0) + (this.two ? 100 : 0) +
            (this.three ? 10 : 0) + (this.four ? 1 : 0);
        switch (tmp) {
            case 1:
                return "1";
            case 10:
                return "2";
            case 11:
                return "3";
            case 100:
                return "4";
            case 101:
                return "5";
            case 110:
                return "6";
            case 111:
                return "7";
            case 1000:
                return "8";
            case 1001:
                return "9";
            case 1111:
                return "0";
        }
    },
    tryPrint: function () {
        if (!this.writingNow)
            document.getElementById('output').innerHTML += this.getNumber();
    }
};
document.addEventListener('keydown', function (e) {
    if (e.repeat)
        return;
    else if (e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4")
        buffer.register(e.key, true);
    else
        console.log("A different key was pressed down");
});
document.addEventListener('keyup', function (e) {
    if (e.repeat)
        return;
    else if (e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4") {
        buffer.tryPrint();
        buffer.register(e.key, false);
    }
});
