










/*

=====================================
Start of Extra Javascript code \\\|||||///
                                 \\|||//
                                  \||/
*/    /*  Developer / Author object   */
const x = [{
creator:"Vampeyer / Jacob Thompson ",
age :31,
education:"I.T./Web-Dev",
location:"Louisville, Ky",
powerLevel :9583,
radiationLevel:76,
}]

/*


                                   ||
                                   ||                                
                                    V
- - - Array usage and deleting , adding to arrays. 
*/


let list = [56 , 42 , 91 ,"HUT HUT HIKE"]

list.pop();

console.log(list.length)

/* the .pop() removes the last entry  */


list.push("playfootball")

/*  the .push() method adds another item at the 
    end of an array  */

console.log(list.length)

/* the .list method , gives us the entire length of the array . 
which has increased by one   */


console.log(list[3])
console.log(list[0])


/*  */

list.unshift("start a football game")

console.log(list)

/* Arrays modification can be done  by 
 referencing the indexed number.   */

list[4] =  "winafootballgame"
console.log(list[3])



console.log(list)



console.log(x[0])
console.log(typeof x)   

    
///////////////////////////
///////////////////////////
///gosh i sure hope firewalls can detect bugs written here like so. 
//////a alternate way to exit and enter a comment? 
 /* */


  let param1 = 1
  let param2 = 2
  let param3 = 3

    function multiplyTrio(param1,param2,param3)
     {
        return param1*param2*param3; 
  };
 
  console.log(multiplyTrio(1,6,49));




  function multiplyQuad(param1,param2,param3,param4)
   {
    return param1*param2*param3*param4; 
}

console.log(multiplyQuad(1,6,49));




export {multiplyTrio as default,multiplyQuad}



/*  in html file to enable <script type=module > </script> 
*/



'use strict'; 

(function() {

    let newObject = {
        first:'firstName',
        second:'secondName', 
    };

    console.log(newObject)
    

 } )(); 

 