function checkBalance(input) {
    var stack = [];

    for (var i = 0; i < input.length; i++) {
        var bracket = input[i];

        if (bracket === '(' || bracket === '{' || bracket === '[') {
            stack.push(bracket);
        } else if (bracket === ')' || bracket === '}' || bracket === ']') {
            if (stack.length === 0) {
                return false; // Extra closing bracket
            }

            var lastBracket = stack.pop();

            if (
                (bracket === ')' && lastBracket !== '(') ||
                (bracket === '}' && lastBracket !== '{') ||
                (bracket === ']' && lastBracket !== '[')
            ) {
                return false; // Mismatched opening and closing brackets
            }
        }
    }

    return stack.length === 0; // If stack is empty, brackets are balanced
}

// Example usage:
var userInput = prompt("Enter a string with brackets:");
var result = checkBalance(userInput);
if (result) {
    console.log("Brackets are balanced.");
} else {
    console.log("Brackets are not balanced.");
}














