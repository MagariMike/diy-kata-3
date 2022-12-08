const fizzBuzz = (number) => {
    if (number % 5 === 0 && number % 3 === 0) {
    return 'fizzBuzz'
    }
    if (number % 5 === 0) {
    return 'Buzz'
    }
    if (number % 3 === 0) {
    return 'fizz'
    }
    return number;
};

module.exports = fizzBuzz;
