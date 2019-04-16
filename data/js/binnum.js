var _this = this;
var output = {
    el: document.getElementById('output'),
    replace: function (digit) { return _this.el.innerHTML = digit; }
};
var buffer = {
    writingNow: true,
    one: false,
    two: false,
    three: false,
    four: false,
    register: function (digit, state) {
        _this.writingNow = state ? true : false;
        switch (digit) {
            case "1":
                _this.one = state ? true : false;
                break;
            case "2":
                _this.two = state ? true : false;
                break;
            case "3":
                _this.three = state ? true : false;
                break;
            case "4":
                _this.four = state ? true : false;
                break;
        }
        return _this;
    },
    getNumber: function () {
        // 0000 0001 0010 0011 0100 0101 0110 0111
        //  N/A    1    2    3    4    5    6    7
        // 1000 1001 1010 1011 1100 1101 1110 1111
        //    8    9  N/A  N/A  N/A  N/A  N/A    0
        if (!_this.one) {
            if (!_this.two) {
                if (!_this.three && _this.four)
                    return "1";
                if (_this.three && !_this.four)
                    return "2";
                if (_this.three && _this.four)
                    return "3";
            }
            else if (_this.two) {
                if (!_this.three && !_this.four)
                    return "4";
                if (!_this.three && _this.four)
                    return "5";
                if (_this.three && !_this.four)
                    return "6";
                if (_this.three && _this.four)
                    return "7";
            }
        }
        else if (_this.one) {
            if (!_this.two && !_this.three && !_this.four)
                return "8";
            if (!_this.two && !_this.three && _this.four)
                return "9";
            if (_this.two && _this.three && _this.four)
                return "0";
        }
        return "error ";
    },
    tryPrint: function () {
        if (_this.writingNow)
            output.replace(_this.getNumber());
    }
};
document.addEventListener('keydown', function (e) {
    if (e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4")
        buffer.register(e.key, true);
});
document.addEventListener('keyup', function (e) {
    if (e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4")
        buffer.register(e.key, false).tryPrint();
});
