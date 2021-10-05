//Tallest Mountain
var mountains = [
    { name: 'Kiliminjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 },
];
function findNameofTallestMountain(mounts) {
    var tallest = 0;
    var cName = '';
    for (var i = 0; i < mounts.length; i++) {
        if (mounts[i].height > tallest) {
            tallest = mounts[i].height;
            cName = mounts[i].name;
        }
    }
    return cName;
}
var tallestName = findNameofTallestMountain(mountains);
console.log(tallestName);
var products = [
    { name: 'cookie', price: 1.95 },
    { name: 'brownie', price: 2.95 },
    { name: 'sundae', price: 3.95 },
    { name: 'animal crackers', price: 0.95 },
    { name: 'candy', price: 3.00 },
];
//function getPrices(prods:Product[], price){
//  var output = [];
//for (var i=0; i < prods.length; i++){
//    output.push(prods[i][price]);
//    return output;
//}
//}
function calcAverageProductPrice(prods) {
    var total = prods.reduce(function (previousValue, currentValue) { return previousValue + currentValue.price; }, 0);
    return total / prods.length;
}
console.log(calcAverageProductPrice(products));
//console.log(calcAverageProductPrice(getPrices(products)));
/*function calcAverageProductPrice(prods:Product[]):number{
    //totalP: Number;
    //totalP = prods.reduce((sum : number, b: Product) => sum + b.price)/prods.length;
    let total = prods.reduce(
        ( previousValue, currentValue ) => previousValue + currentValue,
        0
      )
      return total;
    
}

let average : number = calcAverageProductPrice(products);
console.log(average);





//Inventory */ 
