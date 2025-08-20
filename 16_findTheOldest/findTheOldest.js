const findTheOldest = function (arr) {
    return arr.sort((p1, p2) => {
        const p1age = p1.yearOfDeath
            ? p1.yearOfDeath - p1.yearOfBirth
            : new Date().getFullYear() - p1.yearOfBirth

        const p2age = p2.yearOfDeath
            ? p2.yearOfDeath - p2.yearOfBirth
            : new Date().getFullYear() - p2.yearOfBirth

        return p2age - p1age
    })[0]
};

/*
const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
*/
// Do not edit below this line
module.exports = findTheOldest;
