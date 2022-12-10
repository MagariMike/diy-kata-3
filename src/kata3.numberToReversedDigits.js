const numberToReversedDigits = (number) => {
    let stringNum =  String(number);
    let stringSplit = stringNum.split('');
    stringSplit.reverse();
    return stringSplit; 
};

module.exports = numberToReversedDigits;
