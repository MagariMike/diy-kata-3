const reachDestination = (distance, speed) => {
    let timeToDestination = distance / speed;
    let roundedNumber = Math.ceil(timeToDestination*2)/2;
    return `I should be there in ${roundedNumber} hours.`;
};

module.exports = reachDestination;
