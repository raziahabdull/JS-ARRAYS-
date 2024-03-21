let digits = [3,7,34,90,12];
let r = digits [digits.length -1];
console.log(r);

let mixed = [true,"green","where",12,56];
let q = mixed [mixed.length -1];
console.log (q); 

let stringmyPets = ["Cow","Bird","Snake","Dog"];
console.log(stringmyPets.toString());

let arr3 = [-5,9,5,3,2,-3,6,8,4,1];
console.log(arr3.sort());

let arr = ["apple","mango","apple","orange","mango","mango"];
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
 
console.log(removeDuplicates(arr));

let word = "sevink";
console.log(word.split('').sort().join(''));

let arr5 = ["the","way","x",4];
let found = arr5.find(function (element) {
    return element > "way";
});
console.log(found);
