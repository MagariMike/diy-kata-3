const humanCatDogYears = (number) => {

    let catYears = 0;
    for (let i = 1; i <= number; i++) {
        if (i === 1) {
        catYears += 15;
        } else if (i === 2) {

            catYears += 9;
    } else {
            catYears += 4;
        }

    }

    let dogYears = 0;
    for (let i = 1; i <= number; i++) {
        if (i === 1) {
            dogYears += 15;
        } else if (i === 2) {
            dogYears += 9;
        } else {
            dogYears += 5;
        }
    }

    return [number, catYears, dogYears];
};

module.exports = humanCatDogYears;
