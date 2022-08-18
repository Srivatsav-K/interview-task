/*
Write a program to find if a string is a palindrome. Print true if the string is a palindrome and print false if it is
not.
Sample 1:
Input:
Anna
Output:
true
Sample 2:
Input:
Hello
Output:
false
Note:
The inputs are case insensitive, so level and Level are the same inputs.
*/

function palindrome(str) {
    const lowercase = str.toLowerCase()
    let reverse = ''
    for (let i = lowercase.length - 1; i >= 0; i--) {
        reverse += lowercase[i]
    }

    if (reverse === lowercase) {
        return true
    }

    return false
}

console.log(palindrome('Anna'))
console.log(palindrome('Anasna'))