const calculator = {
    add: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    times: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
    }
}

const plusResult = calculator.add(2, 2);
const minusResult = calculator.minus(4, 2);
const timesResult = calculator.times(2, 2);
const divideResult = calculator.divide(4, 2);
const powerResult = calculator.power(6, 2);