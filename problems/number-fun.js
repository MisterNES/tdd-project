function returnsThree() {
    return 3;
}

function reciprocal(num) {

    if (num > 1000000 || num < 0) {
        throw new TypeError("Please enter a number between 1 and 1,000,000")
    };

    return num **-1;
};



module.exports = {returnsThree, reciprocal};
