const { humanCatDogYears } = require("../src");

describe('humanCatDogYears', () => {
    test('returns array of human, cat and dog years when passed human years', () => {
        expect(humanCatDogYears(10)).toStrictEqual([10,56,64])
    });
});
