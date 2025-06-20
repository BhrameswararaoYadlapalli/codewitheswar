const input = document.getElementById('inputString');
const output = document.getElementById('output');

function checkPalindrome( ){
  const str = input.value;
   const reversedStr = str.split('').reverse().join('');

  if (str === reversedStr) {
    output.textContent=`${str} is a palindrome`;
  }
  else {
    output.textContent=`${str} is not a palindrome`;

    }
    input.value ="";
}
