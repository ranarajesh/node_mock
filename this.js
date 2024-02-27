function withoutStrict(){
    this.thisVariable = "this is set in window (i.e. global scope)"
    console.log(this.thisVariable);
    console.log(globalThis.thisVariable)
}

function withStrict(){
    'use strict'
    try{
        this.thisVariable = "this is  not set in window (i.e. global scope)"
    }catch(e){
        console.log(e);
    }
    console.log(this);
}
withoutStrict()
withStrict()

const obj = {
    str: 'Hello!',
    fn: function() {
        console.log(this);
    },
    fnArrow: ()=>{ console.log(globalThis.thisVariable)}
};

obj.fn();
obj.fnArrow()


function counter(){
    let count1 = 0;
    // return function(){
    //     'use strict'
    //     console.log(this)
    //     return count1++;
    // }
    return () => {
        // this is does not matter as 'use strict' 
        console.log(this.thisVariable)
        return count1++;
    }
    // return function() {
    //     return this.count1++;
    // }
}
var t1 = counter();

console.log(t1())
console.log(t1())
console.log(t1())
console.log(t1())



// instroduction to 'new' keyword
function fn(){

}
console.log(fn());
const a = new fn();
const b = new fn();
console.log(a, b);
console.log(a === b);
function personFn(name, age) {
    console.log(this)
    console.log(arguments)
    const personObj = {};

    personObj.name = name;
    personObj.age = age;
    
    return personObj;
}

const alex = personFn('Alex', 30);
console.log(alex); // -> { name: 'Alex', age: 30 }

function PersonConstructor(name, age) {
    console.log(this);
    console.log(arguments)
    this.name = name;
    this.age = age;
} 

const christa = new PersonConstructor('Christa', 30);
console.log(christa); 

const arr = [2,3,4,2,2]
const arr1 = arr.slice();
console.log(arr == arr1);
console.log(arr1);

function add(){
   //  console.log(arguments.slice()); // through error as arguments is array like object not array. we need to convert it to array apply array method on it.
   const arrArgu = [].slice.call(arguments);
   console.log(arrArgu);

}
add()

const addArr = ()=>{
    console.log(this);
    console.log(arguments)
}
addArr()

// Array 
const newArr = new Array(1,2,3,2);
console.log(newArr, newArr.length);

const sort1 = ['D','a', 'b', 'c']
const sort2 = ['A', 'B', 'C', 'd']
console.log([...sort1, ...sort2].sort());
console.log([...sort1, ...sort2].sort((a,b) => b.localeCompare(a)));
console.log([...sort1, ...sort2].sort((a,b) => a.localeCompare(b)));

console.log('a'.charCodeAt());

let abc ;
console.log(abc);

const fArr = [ 9, 2, 3, 6,2, 6 ,-1, 9,0,3,1,5,5,]
console.log(fArr);
console.log(fArr.filter( (i, index) =>  {
    // console.log(i, index, fArr.lastIndexOf(i));
    // console.log(fArr.lastIndexOf(i) !== index);
    return fArr.lastIndexOf(i) === fArr.indexOf(i);
}));

const mapOder = new Map();
fArr.forEach(element => {
    if(mapOder.has(element)){ 
        mapOder.delete(element)
    }else{
        mapOder.set(element, 1)
    }

});
console.log(mapOder);

for([x, i] of mapOder){
    console.log(x, i);
    if(i == 1){ 
        console.log(`'first unique value is ${x}'`);
        break;
    }
}

function FuncConstructor(){
    this.print= function(){
        console.log("Calling Print"); 
       }
}
function ProtoFuncConstructor(){}
ProtoFuncConstructor.prototype.print = function(){ console.log("Calling print from protofunction consturctor")}


let funConst = [];
console.time('FNC')
for (let index = 0; index < 2e6; index++) {
    funConst.push(new FuncConstructor());
    
}
console.timeEnd("FNC");
console.log(funConst.length, funConst[1].print());
console.log(funConst[0]);
var t = new FuncConstructor();
console.log(`dfdfdsfdfd ${Object.hasOwnProperty(t.print)}`)


let funProConst = [];
console.time('FPC')
for (let index = 0; index < 2e6; index++) {
    funProConst.push(new ProtoFuncConstructor());
    
}
console.timeEnd("FPC");
console.log('fdsfdsfsdfsd fdsf dsfds fsdf--',funProConst[0]);
console.log(funProConst.length, funProConst[1].print());
var t = new ProtoFuncConstructor();
console.log(`ProtoFuncConstructor ${Object.hasOwnProperty(t.print)}`)

function Protofun(){}
console.log(Protofun.prototype);
function Fn() {}
const obj1 = Object.create(Fn);
const obj2 = Object.create(Fn.prototype);

console.log(obj1.__proto__ === Fn.prototype);
console.log(obj1.__proto__, obj2.__proto__, fn.prototype);
(function(){/* some code here */
    console.log('iifes');
    console.log(obj2);
})();

(function(){ console.log('1')})();
(function(){console.log('12')}());
!function(){console.log('!')}();
~function(){console.log('~')}();
+function(){console.log('+')}();
-function(){console.log('-')}();

const obj3 = {
    test: 'abc',
    abc: 'def'
};
console.log(Object.keys(obj3));
var s = Object.keys(obj3).sort( (a, b) => a.localeCompare(b))
console.log(s);

const obj4 = {
    val1: 4,
    val2: 5,
    val3: 6,
};

// Finish this:
console.log(Object.keys(obj4).map( i => { console.log(i); return obj4[i]}));
const sum = Object.keys(obj4).map( i => obj4[i]*3).reduce( (a,b) => a + b, 0);
console.log(sum);

const obj5 = {};

Object.defineProperty(obj5, 'testValue', {
    value: 17,
    writable: false,
    configurable: false,
    enumerable: true
});

obj5.testValue = 22; // assignment works
console.log(obj5.testValue); // -> 22

Object.defineProperty(obj5, 'testValue', {
    writable: false,
    configurable: false,
    enumerable: true
}); // No error

obj5.testValue = 35; // fails silently
console.log(obj.testValue); // -> 22