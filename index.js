///const[,,a,b] = process.argv;
//const sum = (a,b)=>{
//  return a+b;
//}
//console.log(sum(+a,+b));
//console.log(docoument);
//console.log(window);

//console.log(p)
///
const fs = require ("fs");
const quote = "goin tp create a new file";

fs.writeFile = ("cool.txt", quote, () => {
    console.log("we create a cool.txt is created");
});