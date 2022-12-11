const joinNames = (namesArr) => {
const names = namesArr.map((simpson) => {
return simpson.name;
})
// can just return result of names.reduce eg. return names.reduce...
let outputString = names.reduce((acc, person, ind) => {
if (ind <  namesArr.length-1) {
    return `${acc}, ${person}`

} else { // else not needed as if the first IF statement is not true, it will move on to run the following code\\
    return `${acc} & ${person}`
}

})
return outputString;
};

module.exports = joinNames;
