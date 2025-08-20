const fibonacci = function (num) {
    if (typeof num !== Number) {
        count = parseInt(num)
    } else {
        count = num
    }

    if (count < 0) return "OOPS"


    const fib = [0, 1];
    for (let i = 2; i <= num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[num];
};

// Do not edit below this line
module.exports = fibonacci;
