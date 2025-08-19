// arithmatic operator

function arithmatic(){
    let a =10;
    let b=20;
 
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
    console.log(a%b)
    console.log(a**b)
    a++
    b--
    console.log(a)
    console.log(b)
}
arithmatic()

//assignment operator

function assignment() {
    let c = 20;
    let d = 5;

    c += d;
    console.log(c); 
    c -= d; // a = a - b → a = 15 - 5 → a = 10

    
    console.log(c); // prints value of b
}
assignment()

//equality operator 
function equlality ()
{
    let a="10";
    let b=20;
    let c="10"

    console.log(a==b)
    console.log(a===c)
}
equlality()

//comparison operator
function comparison(){
let a=10;
let b=20;
let c=20;

console.log(a!=b)
console.log(a<b)
console.log(a>b)
console.log(b<=c)
console.log(b>=a)
}
comparison()

//logical operator

function logical(){
    let a=20;
    let b="20"
    let c=30;

    console.log(a==b && a<c)
    console.log(a==b && a>c)
    console.log(a==c || a>c)
    console.log(a==b || a>c)
    console.log(a!=c)
    console.log(a!=b)

}logical()

//terinary operator

function terinary()

{
    let age =20;
    let result = age<=18?"adult":"minor"
    console.log(result)
} terinary()
