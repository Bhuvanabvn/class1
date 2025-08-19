//function declaration

function student(name,age,rollno){
    console.log("My name is " + name," , My age is "+age ,"My rollNo is "+rollno);

}
student("Bhuvana",21,111)
student("Bharathi",22,222)

// function expression or anonymous function

let drink =function(name , price){
    console.log("Drink name is "+name , " , Price of the drink is "+ price)
}
drink ("Maza",50)
drink("PEPSI",60)

//Arrow function 

let movie =(ticket ,parking,snacks)=>{
    console.log(ticket+parking+snacks)
}
movie(100,50,300)
movie(150,50,250)

//Immediate Invoke function
(
    function(){
        console.log("bhuvana")
    }
)
()