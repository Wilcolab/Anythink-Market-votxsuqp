function toKebabCase(str) {
    // Step 1: Turn the entire string to lowercase
    const lowerStr = str.toLowerCase();
    
    // Step 2: Identify separators and non-separators
    let result = '';
    
    for (let i = 0; i < lowerStr.length; i++) {
        const char = lowerStr[i];
        const nextChar = lowerStr[i + 1];
        
        // Check for valid separators
        if (char === '_') {
            // Underscore is a valid separator
            result += '-';
        } else if (char === '-') {
            // Hyphen is a valid separator
            result += '-';
        } else if (char === ' ') {
            // Space is only valid if followed by a character
            if (nextChar === undefined || nextChar === ' ' || nextChar === '_' || nextChar === '-') {
                throw new Error('Invalid separator: space must be followed by a character');
            }
            result += '-';
            i++; // Skip the next character as it follows the space
            result += nextChar;
        } else {
            // Regular character
            result += char;
        }
    }
    
    // Handle edge case: string begins with a space
    if (str[0] === ' ') {
        throw new Error('Invalid separator: string cannot begin with a space');
    }
    
    // Step 3: All separators have been converted to hyphens
    return result;
}