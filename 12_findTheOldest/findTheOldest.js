const findTheOldest = function(people) {

  let oldest = people.reduce((oldestPerson, currentPerson) => {
    let oldestAge = returnAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
    let currentAge = returnAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    console.log(`${oldestAge}, ${currentAge}`);

    if(currentAge > oldestAge) return currentPerson;
    else return oldestPerson;
  })

  return oldest;
};

function returnAge(birthYear, deathYear) {
  if(!deathYear) deathYear = new Date().getFullYear();
  
  return (deathYear-birthYear);
}

// Do not edit below this line
module.exports = findTheOldest;
