interface Pet{
    name: string;
    age: number;
}

//let s = 'hello';
//console.log(s);
//console.log(3+5);

let pet1:Pet = {
    name:'Sally',
    age:2
};

console.log(pet1);

let allpets:Pet[] = [
    {name: 'fred', age: 3},
    {name: 'julie', age: 6},
    {name: 'dylan', age: 5},
];
//console.log(allpets);
function ShowPet(thepet:Pet){
    console.log(`Name: ${thepet.name} Age : ${thepet.age}`);
}
ShowPet(allpets[1]);

function findOldest(pets:Pet[]):string {
    let biggestage: number = 0;
    let currentname :string ='';
    for (let i=0; i<pets.length; i++){
        if (pets[i].age > biggestage){
            biggestage = pets[i].age;
            currentname = pets[i].name;
        }
    }
    
    return currentname;
}

let oldestname: string = findOldest(allpets);
console.log(oldestname);

