// string

let name="bhuvana bharathi";
let name1="bhuvana\n bharathi \t moorthy";
let name2=`valanarayana moorthy
athirsta lakshmi`;
console.log(name);
console.log(name1);
console.log(name2);

// string methods

let myname ="bhuvana bharathi"
console.log(myname.length);
console.log(myname.toUpperCase());
console.log(myname.toLowerCase());
console.log(myname.charAt(1));
console.log(myname.indexOf("a"));
console.log(myname.lastIndexOf("a"));
console.log(myname.includes("bhuvana"));
console.log(myname.includes("moorthy"));
console.log(myname.replace("bharathi","valanarayanamoorty"));

let fathername="  valanarayanamoorthy  "
let fathername2="valamoor"
console.log(fathername.trim());
console.log(myname.concat(fathername));
console.log(fathername2.startsWith("vala"));
console.log(fathername2.endsWith("oor"));
console.log(fathername.split(""));
console.log(fathername2.slice(1,5));


 //task

let task="bhuvana bharathi";
console.log(task.split("").reverse().join(""));

