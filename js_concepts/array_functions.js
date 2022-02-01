const people = [
{
    name: 'Dom',
    age: 32,
    occupation: 'Web Developer'
},
{
    name: 'Amy',
    age: 26,
    occupation: 'Nurse'
},
{
    name: 'Bruce',
    age: 55,
    occupation: 'Baker'
}
];


const names = people.map(person => {
    return person.name;
});

//const names_2 = people.map(getNames)

//function getNames()
console.log("'map' usage:");
console.log(names)


const overThirties = people.filter(person => {
    return person.age >= 30;
});

console.log("'filter' usage:");
console.log(overThirties);


const totalAge = people.reduce((total, person) => {
    return total + person.age;
}, 0);

console.log("'reduce' usage:");
console.log(totalAge);
