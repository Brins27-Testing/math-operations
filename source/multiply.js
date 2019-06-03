export default (...vars) => {
    var total = 1;
    vars.forEach((num) => {
        total *= num;
    });
    log();
    return total;
}