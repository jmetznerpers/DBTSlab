//let s = 'hello';
//console.log(s);
//console.log(3+5);
var pet1 = {
    name: 'Sally',
    age: 2
};
console.log(pet1);
var allpets = [
    { name: 'fred', age: 3 },
    { name: 'julie', age: 6 },
    { name: 'dylan', age: 5 },
];
//console.log(allpets);
function ShowPet(thepet) {
    console.log("Name: " + thepet.name + " Age : " + thepet.age);
}
ShowPet(allpets[1]);
function findOldest(pets) {
    var biggestage = 0;
    var currentname = '';
    for (var i = 0; i < pets.length; i++) {
        if (pets[i].age > biggestage) {
            biggestage = pets[i].age;
            currentname = pets[i].name;
        }
    }
    return currentname;
}
var oldestname = findOldest(allpets);
console.log(oldestname);
