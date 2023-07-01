
function checkPalindrome(string) {

   
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        
        if (string[i] !== string[len - 1 - i]) {
            return (`<h2>It is not a palindrome Name</h2>`);
         
        }
    }
    return (`<h2>It is a palindrome Name</h2>`);
 
}

// take input
const string = prompt('Enter a string Name: ');

// call the function
const value = checkPalindrome(string);

document.write(value);