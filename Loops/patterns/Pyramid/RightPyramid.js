let n = process.argv[2];
for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += '*';
    }
    //console.log(str.repeat(i));
    console.log(str);
}
for (let i = n; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += "*";
    }
    console.log(str);
    //console.log(str.repeat(i));
}
/* 
//output of above
*
**
***
****
*****
*****
****
***
**
*
*/


//using reprat function

console.log("using repeat function");

for (let i = 1; i <= n; i++) {
    let str = "*";
    console.log(str.repeat(i));
}
for (let j = n; j >= 1; j--) {
    let str = "*";
    console.log(str.repeat(j));
}