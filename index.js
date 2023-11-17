// Reverse a String

function reverseString(str) {
    let reserved = "";
  for(let i =0; i < str.length; i++){
    // console.log(str[i])
    
    reserved = str[i] + reserved;
  }
  return reserved;
}

// Factorialize a Number

function factorialize(num) {
    if (num === 0 || num === 1){
      return 1;
    }else {
      let result = 1;
      for (let i = 2 ;i <= num ; i++){
        result *= i;
      }
      return result;
    }
  }
  
  factorialize(5);
  
//   Find the Longest Word in a String

function findLongestWordLength(str) {
    let myArr = str.split(' ')
    let result= []
  
    for(let item of myArr){
      result.push(item.length)
    }
      result.sort((a,b)=>{
        return a- b 
      })
   
    return result.pop();
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

//   Return Largest Numbers in Arrays

function largestOfFour(arr) {
    let result = []
       for(let item of arr){
         item.sort((a,b)=>a-b)
            result.push(item.pop())
        }
    
      console.log(result)
      return result
    }
    
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// Confirm the Ending

function confirmEnding(str, target) {
        let targetArr = target.split('');
        let result = str.slice(-targetArr.length)
        if(result === target){
          return true
        }else{
          return false
        }
      }
      
      confirmEnding("Bastian", "n");

//  Repeat a String

 function repeatStringNumTimes(str, num) {
        let r = ""
        for(let i = 0; i < num; i++){
          r= str + r
        }
        return r
        
      
        
      }
      
      repeatStringNumTimes("abc", 3);
      
      
// Truncate a String

      function truncateString(str, num) {
        if (str.length > num) {
            return str.slice(0, num) + "...";
        } else {
           
       
      return str;
        }
    }
    
    truncateString("A-tisket a-tasket A green and yellow basket", 8);

    // Boo who

function booWho(bool) {
        return typeof bool === 'boolean';
        }
      
      
      booWho(null);


// Title Case a Sentence

      function titleCase(str) {
        let mots = str.toLowerCase().split(' ');
        for (let i = 0; i < mots.length; i++) {
              let firstL = mots[i].charAt(0).toUpperCase();
              let resteMot = mots[i].slice(1).toLowerCase();
              mots[i] = firstL + resteMot;
        }
        
        console.log(mots.join(' '))
      
        
        return mots.join(' ');
      }
      
      titleCase("sHoRt AnD sToUt");


    //   Slice and Splice
    
      function frankenSplice(arr1, arr2, n) {
        let arr2C = arr2.slice();
        
        arr2C.splice(n,0,...arr1)
        console.log(arr2C)
        return arr2C;
      }
      
      frankenSplice([1, 2, 3], [4, 5, 6], 1);