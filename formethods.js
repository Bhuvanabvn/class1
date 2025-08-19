//for of

let arr=["apple","orange","mango","grape"]
for(let fruit of arr){
    console.log(fruit)
}

//for in 

let fruit={
    name:"apple",
    colour:"red"
}
for(let key in fruit)
{
    console.log(fruit[key])
}


//for each
let arr1=["banana","straberry","blueberry"]

arr1.forEach((Val,ind,arr1)=>
{
    console.log(Val,ind,arr1)
})