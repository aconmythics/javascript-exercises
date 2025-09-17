const findTheOldest = function(array) {
    oldest = 0
    array.forEach((person, index) => {
        age = person.yearOfDeath - person.yearOfBirth
        if (isNaN(age)) {
            time = new Date();
            year = time.getFullYear()
            age = year-person.yearOfBirth
        }
        if (age > oldest) {
            oldest = age
            oldestIndex = index
        }
    })
    oldestPerson = array[oldestIndex]
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
