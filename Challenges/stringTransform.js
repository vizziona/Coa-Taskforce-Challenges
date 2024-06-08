function transformString(s) {
    const length = s.length;
    if (length % 15 === 0) {
        // Implementation of both reverse and convert to ASCII as requird.
        const reversedString = s.split('').reverse().join('');
        const asciiCodes = reversedString.split('').map(char => char.charCodeAt(0)).join(' ');
        return asciiCodes;
    } else if (length % 5 === 0) {
        // Implementation of Converversion to ASCII
        const asciiCodes = s.split('').map(char => char.charCodeAt(0)).join(' ');
        return asciiCodes;
    } else if (length % 3 === 0) {
        // Implementation of Reverse the string
        return s.split('').reverse().join('');
    } else {
        return s;
    }
}

// Function to handle user input
function main() {
    const inputString = prompt("Hi, Enter a Random String(Word):");
    if (inputString !== null) { 
        const output = transformString(inputString);
        alert(`Output: ${output}`);
    }
}
main();
