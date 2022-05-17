// 1.
let year = 1993;
let futureYear = 2022;
let age = futureYear - year;
console.log(age);
console.log('I will be either ' + age + ' ' + 'or' + ' ' + (age - 1) + ' ' + 'in' + ' ' + '2022');
// 2.
var celsius = 29;
var f = (29 * 9) / 5 + 32;
console.log(celsius + '°C' + ' ' + ' ' + 'is' + ' ' + f + '°F');
var fahrenheit = 20;
var c = (fahrenheit - 32) * 5 / 9;
console.log(c);
console.log(fahrenheit + '°N' + ' ' + ' ' + 'is' + ' ' + c + '°C');
// 3.
function assignGrade() {
        let marks = 70;
        if (marks >= 75) {
                console.log("A")
        }
        else if (marks >= 60) {
                console.log("B")
        }
        else if (marks >= 45) {
                console.log("C")
        }
        else {
                console.log("F")
        }

}
assignGrade();


// switch
var month = (prompt('Enter Number')) - 1;
switch (month) {
        case 1:
                console.log('Jan')
                break;
        case 2:
                console.log('Feb')
                break;
        case 3:
                console.log('Mar')
                break;
        case 4:
                console.log('Apr')
                break;
        case 5:
                console.log('May')
                break;
        case 6:
                console.log('Jun')
                break;
        case 7:
                console.log('Jul')
                break;
        case 8:
                console.log('Aug')
                break;
        case 9:
                console.log('Sep')
                break;
        case 10:
                console.log('Oct')
                break;
        case 11:
                console.log('Nub')
                break;
        case 12:
                console.log('Dec')
                break;
        default:
                console.log('Not vaild');
                break;
}
// loop
// pirint the 1 to 20 numbers
for (var i = 1; i <= 20; i++) {

        console.log(i + ' ');
}

//pirint the 1 to 20 odd number
for (var i = 1; i <= 20; i++) {
        if (i % 2 != 0) {
                console.log(i + ' ');
        }
}

//pirint the 1 to 20 even number
for (var i = 1; i <= 20; i++) {
        if (i % 2 == 0) {
                console.log(i + ' ');
        }
}
console.log('Odd Number ' + ' ')
for (var x = 0; x <= 20; x++);
if (x === 0) {
        console.log(x + " is even");
}
else if (x % 2 === 0) {
        console.log(x + " is even");
}
else {
        console.log(x + " is odd");
}




var num = 4;
var fact = 1;
for (var n = 2; num <= num; n++) {
        fact = fact * n;
}
console.log(`${num}! = ${fact}`);


let lcm = (n1, n2) => {
       
        let lar = Math.max(n1, n2);
        let small = Math.min(n1, n2);
        
        
        let i = lar;
        while(i % small !== 0){
          i += lar;
        }
        
       
        return i;
      }


console.log(lcm(20, 15));
console.log(lcm(5, 7));


// let tech= {
//         name:"Aara",
//         age:29,
//         laptop:{cpu:17,
//                 harddisk:4
//         }       
// }
// tech.telephone="i phone "
// for(let key in tech)
// {console.log(key,tech[key]);}




// let x=[  ];
// x[0] = 5;
// x[99] = 77;
// for(let num of x)
// {console.log(num);}


// let x=[  ];
// x[0] = 5;
// x[5] = null;
// x[99] = 77;
// for(let key in x)
// {console.log(key,x[key]);}

// let input = [2,4,6,7,4,9,76,45,34,44]
// input.forEach(a=>{
//         console.log(a)
// });

// let nu = [2,4,6,7,4,9,76,45,34,44]
// nu.filter(a=>a%2===0)
       

// .forEach(a=>{
//         console.log(a);
// });


// let input = [2,4,6,7,4,9,76,45,34,44]
// input.map(a=>a*2)
       

// .forEach(a=>{
//         console.log(a);
// });


// let input = [2,4,6,7,4,9,76,45,34,44]
// let inpu
       
{/* <h5>Tasks</h5>
<div id="tasks">
<div>
<span>Task 1</span>
venan-2922-1-20//enans */}
