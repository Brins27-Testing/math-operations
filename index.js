module.exports = {
    add: (...vars) => {
        var sum = 0;
        vars.forEach((num) => {
            sum += num;
        });
        return sum;
    },
    multiply: (...vars) => {
        var total = 1;
        vars.forEach((num) => {
            total *= num;
        });
        return total;
    }
}