/*
Kiara Castillo Magallanes
10/06/2022
*/ 

let beepBop = document.getElementById("beepBop");

//array 
let nArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

for(let i = 0; i < nArray.length; i++)
{
    
 if(nArray[i] % 3 == 0 && nArray[i] % 5 == 0 ) { // divisible by 3 AND 5
        nArray[i] = "beep bop";
    }

 if(nArray[i] % 3 == 0) { // array are divisible by 3
        nArray[i] = "beep";
    }

if(nArray[i] % 5 == 0) { // array are divisible by 5
        nArray[i] = "bop";
    }
beepBop.innerHTML += nArray[i] + "<br />";
}