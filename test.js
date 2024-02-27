const array = [1,2,3,20,3];
delete array[4];
console.log(array);
array.reverse();
console.log(array);
console.log(array.length);

var obj2 = {a: 1, b: 1, c:3, fn: function(){ 'use strict'; console.log(this);}, ar: ()=> {'use strict'; console.log(this);}}

const obj = {
    '#': 'hashvalue',
    '&': 'ampersandValue',
    fn(){ console.log("fn")},
    get ams(){ console.log("ams")},
    arr : () => { console.log(this)}
};
console.log(obj["#"], obj["&"]);

const { '#': hashvalue, '&': ampersand} =obj;
console.log(hashvalue, ampersand, obj.arr())

console.log(globalThis, this,global)
