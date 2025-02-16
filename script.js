function firstNonRepeatedChar(str) {

	 let charCount = {}; // Object to store character frequency

    // Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char; // Return first non-repeating character
        }
    }

    return null; // Return null if all characters are repeated
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
