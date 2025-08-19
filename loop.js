// for loop

for (i=1;i<=10;i++)
{
    console.log(i)
}

let str="string" //len=6 ,ind=0
for(i=0;i<str.length;i++)

    {console.log(str[i])

    }

    //print horizontal

    let strng="string";
    let empty="";
    for ( let i=0; i<strng.length ;i++)
    {
        // console.log(strng[i])
        empty=empty+strng[i];
        
    }
    console.log(empty)

   // while loop -> after increment

   let wloop=1
   while(wloop<=10)
   {
    console.log(wloop)
    wloop++;
   }

   //while loop -> before increment 

   let whloop=1
    while(whloop<=10)
        {
whloop++;
console.log(whloop)
        }
    
//do while --> atleast excute once 

let dloop=2
do{
    console.log(dloop)
    dloop++;

}
while(dloop==10)