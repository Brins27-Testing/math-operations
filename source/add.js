export default (...vars) => {
    var sum = 0;
    vars.forEach((num) => {
        sum += num;
    });
    log();
    return sum;
}