//Day 0: Hello, World!
console.log('Hello, World!');
/////////////////////////////////


//Day 0: Data Types
console.log(firstInteger + Number(secondInteger));
console.log(firstDecimal + Number(secondDecimal));
console.log(firstString + secondString);
//////////////////



//Day 1: Arithmetic Operators
function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width;
    return area;
}

    function getPerimeter(length, width) {
        let perimeter;
        // Write your code here
        perimeter = 2* (length + width)
        return perimeter;
    }
/////////////

//Day 1: Functions
var result = 1;
function factorial(n){
    let i = 1;
do {
result = result * i
  i++
  } 
  while (i < n+1);
  return result;
}
///////////////

//Day 2: Conditional Statements: If-Else
function getGrade(score) {
    let grade;
    // Write your code here
    if (score <= 30 && score > 25 ) {
        grade = "A";
    }
    else if (score <= 25 && score > 20) {
        grade = "B";
    }
    else if (score <= 20 && score > 15) {
        grade = "C";
    }
    else if (score <= 15 && score > 10) {
        grade = "D";
    }
    else if (score <= 10 && score > 5) {
        grade = "E";
    }
    else if (score <= 5 && score >= 0) {
        grade = "F";
    }
    return grade;
}
//////////////////////


//Day 2: Conditional Statements: Switch
function getLetter(s) {
    let letter;
    // Write your code here
    var first = ['a','e','i','o','u'];
    var second = ["b","e","d","f","g"];
    var Third = ["h","j","k","l","m"];
    var Fourth = ["n","p","q","r","s","t","v","w","x","y","z"];
    switch(true){
    case(first.indexOf(s.charAt(0) ) != -1):
    letter = "A";
    break
    case(second.indexOf(s.charAt(0) ) != -1):
    letter = "B";
    break
    case(Third.indexOf(s.charAt(0) ) != -1):
    letter = "C";
    break
    case(Fourth.indexOf(s.charAt(0) ) != -1):
    letter = "D";
    break
    }
    return letter;
}
/////////////////////////

//Day 2: Loops
var s = "javascriptloops";
var vowl= "aeiou" ;
function vowelsAndConsonants(s) {
    
 for(var i in s)
 {
    
    for (var j in vowl) {
    
     if(s[i] === vowl[j]){
        console.log(vowl[j])
        break;
     }
 }
 
}
for(var i in s)
 {
    var x = 0;
     for (var j in vowl)
     {    
     if(s[i] != vowl[j]){
        var x = x+1;
        }
     }
     if( x > 4){
        console.log(s[i]);

 }
 }
}
///////////////////////////////

//Day 3: Arrays
function getSecondLargest(nums) {
    // Complete the function
    var result = 0;
    var x = 0;
    for (var i=1; i<nums.length; i++)
    {
    if (nums[x] < nums[i])
    {
    result = nums[i]-1;
    x++;
    }
    }
    return result;
}
////////////////////


