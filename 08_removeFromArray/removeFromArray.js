const removeFromArray = function (arr, ...args) {
    const toRemove = Array.from(args)

    toRemove.forEach(condition => {
        while(arr.some(value => value === condition)){
            const indexToBeRemoved = arr.findIndex((value) => value === condition)
            arr.splice(indexToBeRemoved, 1)
        }
    })

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
