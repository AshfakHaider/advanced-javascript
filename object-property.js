const students = [
    {id: 21, name: "Amit"},
    {id: 31, name: "Omar"},
    {id: 36, name: "Kushbu"},
    {id: 56, name: "Rohima"}
];




const allName = students.map( elements =>elements.name);
const ids = students.map( s => s.id);
const biggerId = students.filter( s => s.id > 30);
console.log(allName);
console.log(ids);
console.log(biggerId);