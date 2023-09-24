////////////////////1. print 1-10/////////////////
function printNumbers()
{
for (var i =1; i<11; i++)
{
    console.log(i);    
}
}
printNumbers()
////////////////////2. print 2D array/////////////
for (var odno=1; odno<7;odno+=2)
{
    console.log(odno,odno+1);    
}
/////////////////////3.print even no. in array////////////////
//firstsol. with static array//
var randomArr1 = [23,44,56,76,89,79,43,56];
console.log(randomArr1);
//second sol. with dynamic array//
var randomArr = [];
for (let x = 0; x < 8; x++)
{
    randomArr.push(Math.floor(Math.random() * 100) + 1);
}
console.log(randomArr);
//working function// 
function printEven()
{
    randomArr.forEach((ele) => 
        {
            if (ele % 2 == 0)
            {
             console.log(ele)
            }
        });
}
printEven()
///////////////////////////////4. delete accordance of no./////////////////////////
// var arr = [23,43,59,76,43,89,11,79,43,56];
// console.log(arr);
// function deleteitem()
// {
//     arr.forEach((item) => 
//         {
//         arr.splice(item==43,1)    
//         console.log(arr)
//         }
//         );
// }
// deleteitem()
var arr = [23,43,59,76,43,89,11,79,43,56];
console.log(arr);
function deleteitem()
{
    arr.forEach((item) => 
    {
        if (item == 43)
        {
        arr.splice(arr.indexOf(item),1)    
        }
    });
    console.log(arr)
}
deleteitem()
///////////////////////////////5. find power of no./////////////////////////
function power(n)
{
console.log(n*n)
}
power(n = prompt ("Please enter the number to find its power"))
//////////////////////////////6. print pattern/////////////////////////
storevalue=[]
for (var patternx=1; patternx<10 ;patternx++)
{
storevalue.push(patternx);
console.log(storevalue);
}
//advance//
// function drawpattern(s,e)
// {
// storevalue=[]
// for (var patternx= s; patternx<e ;patternx++)
// {
// storevalue.push(patternx);
// console.log(storevalue);
// }
// }
// s = prompt ("Please enter your starting number")
// e = prompt ("Please enter your ending number")
// drawpattern(s,e)
//////////////////////////////7. largest/////////////////////////
var largnum = [23,7,56,176,809,79,3,586,111];
console.log(largnum);
//second sol. with dynamic array//
var largnum1 = [];
for (let y = 0; y < 9; y++)
{
    largnum1.push(Math.floor(Math.random() * 100) + 1);
}
console.log(largnum1);
//working function// 
var ind =0;
for(var z =1; z<largnum1.length; z++)
{
// largnum[ind] = largnum[z]
if(largnum1[ind] > largnum1[z])
{
var lrgst = largnum1[ind];
ind = largnum1.indexOf(lrgst)
// console.log(lrgst);
}
else
{
var lrgst = largnum1[z];
ind = largnum1.indexOf(lrgst)
// console.log(lrgst);
}
}
console.log(lrgst);