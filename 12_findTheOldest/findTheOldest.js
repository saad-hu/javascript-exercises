const findTheOldest = function(people) {

  let oldestPerson = people.reduce((person, currentPerson) => {
      let previousAge = returnAge(person.yearOfBirth, person.yearOfDeath);
      let currentAge = returnAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

      if(currentAge > previousAge) return currentPerson;
      else return person;

  }, {})

  return oldestPerson;
};

function returnAge(birthYear, deathYear) {
  if(!birthYear) birthYear  = new Date().getFullYear();
  if(!deathYear) deathYear = new Date().getFullYear();
  
  return (deathYear-birthYear);
}


// Do not edit below this line
module.exports = findTheOldest;
