document.addEventListener('DOMContentLoaded', function() {
//////////////////////////////////////////////////////////////////////////
  // Write the `hotdogNotHotdog` function below.
  function hotdogNotHotdog(item){
    if (item == "hotdog") {
      return "hotdog";
    } else {
      return "not hotdog";
    }
  }


  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(hotdogNotHotdog("hotdog"))
  //Expected output: hotdog
  console.log(hotdogNotHotdog("peyton manning"))
  // Expected output: not hotdog

//////////////////////////////////////////////////////////////////////////
  // Write the `helloWorld` function below.
  function helloWorld(){
    return "Hello World!";
  }


  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(helloWorld())
  // Expected output: Hello World!

//////////////////////////////////////////////////////////////////////////
  // Write `yell` below.
  function yell(word){
    return word.toUpperCase();
  }


  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(yell("Party!"))
  // Expected output: PARTY!

//////////////////////////////////////////////////////////////////////////
  // Write `makeMoreExciting` below.
  function makeMoreExciting(text){
    return text + "!!!";
  }


  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(makeMoreExciting("It's Tuesday"));
  // Expected output: It's Tuesday!!!

//////////////////////////////////////////////////////////////////////////
  // Write `getLength` below.
  function getLength(string){
    return string.length;
  }



  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(getLength("How long am I? Too long? Too short?"));
  // Expected output: 35

//////////////////////////////////////////////////////////////////////////
  // Write `rockstarNamer` below.
  function rockstarNamer(firstPet, streetName){
    return "Your rockstar name is " + firstPet + " " + streetName + ".";
  }


  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(rockstarNamer("Snickers", "Cloverdale"));
  // Expected output: Your rockstar name is Snickers Cloverdale.

//////////////////////////////////////////////////////////////////////////
  // Write `combinedLength` below.
  function combinedLength(stringOne, stringTwo){
    return stringOne.length + stringTwo.length;
  }



  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(combinedLength("Blueberry", "Muffins are my homies"));
  // Expected output: 30

//////////////////////////////////////////////////////////////////////////
  // Write `bigDaddy` below.
  function bigDaddy(numOne, numTwo){
    if (numOne > numTwo){
      return numOne;
    } else {
      return numTwo;
    }
  }



  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(bigDaddy(17, 10));
  // Expected output: 17
  console.log(bigDaddy(100, 200));
  // Expected output: 200
  console.log(bigDaddy(-4, 4));
  // Expected output: 4
  console.log(bigDaddy(21, 21));
  // Expected output: 21

//////////////////////////////////////////////////////////////////////////
  // Write `babyDaddy` below.
  function babyDaddy(numOne, numTwo){
    if (numOne < numTwo){
      return numOne;
    } else {
      return numTwo;
    }
  }



  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(babyDaddy(17, 10));
  // Expected output: 10
  console.log(babyDaddy(100, 200));
  // Expected output: 100
  console.log(babyDaddy(-4, 4));
  // Expected output: -4
  console.log(babyDaddy(21, 21));
  // Expected output: 21

//////////////////////////////////////////////////////////////////////////
  // Write `breakfastChef` below.
  function breakfastChef(wantsSalty, wantsSweet){
    if ((wantsSalty == true) && (wantsSweet == false)){
      return "ham and cheese omelette";
    } else if ((wantsSalty == false) && (wantsSweet == true)){
      return "chocolate chip pancakes";
    } else if ((wantsSalty == true) && (wantsSweet == true)){
      return "chicken and waffles";
    } else {
      return "water";
    }
  }



  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(breakfastChef(true, true));
  // Expected output: "chicken and waffles"
  console.log(breakfastChef(true, false));
  // Expected output: "ham and cheese omelette"
  console.log(breakfastChef(false, true));
  // Expected output: "chocolate chip pancakes"
  console.log(breakfastChef(false, false));
  // Expected output: "water"

//////////////////////////////////////////////////////////////////////////
  // Write `tweener` below.
  function tweener(num1, num2){
    var maxNum = Math.max(num1, num2);
    var minNum = Math.min(num1, num2);
    var difference = maxNum - minNum;
    // console.log("this is the maxNum", maxNum);
    // console.log("this is minNum", minNum);

    if ((num1 < 0) && (num2 < 0)) {
      return Math.floor(Math.random() * difference) + minNum;
    } else {
      return Math.floor(Math.random() * maxNum) + minNum;
    }
  }


  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(tweener(1, 4));
  // Expected output: Your output should be between 1 and 4
  console.log(tweener(30, 2));
  // Expected output: Your output should be between 2 and 30
  console.log(tweener(-10, -4));
  // Expected output: Your output should be between -4 and -10

//////////////////////////////////////////////////////////////////////////
  // Write `countingInNickels` below.
  function countingInNickels(number){
    if (number%5 == 0) {
      return true;
    } else {
      return false;
    }
  }



  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(countingInNickels(20));
  // Expected output: true
  console.log(countingInNickels(23));
  // Expected output: false
  console.log(countingInNickels(0));
  // Expected output: true

//////////////////////////////////////////////////////////////////////////
  // Write `capitalPolice` below.
  function capitalPolice(text){
    if (text == text.toLowerCase()) {
      return false;
    } else {
      return true;
    }
  }



  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(capitalPolice("hey there, how are you doing?"));
  // Expected output: false
  console.log(capitalPolice("Howdy Folks!"));
  // Expected output: true

//////////////////////////////////////////////////////////////////////////
  // Write `isNum` below.
  function isNum(string){
    return !isNaN(string);
  }



  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log("should be false", isNum("I am not a number"));
  // Expected output: false
  console.log("should be true", isNum("11"));
  // Expected output: true

//////////////////////////////////////////////////////////////////////////

})