export function validateInput (event){
    const input = event.target;
    // Regular expression to match any character that is not a digit
    const nonDigitPattern = /\D/g;

    // Replace any non-digit character with an empty string
    input.value = input.value.replace(nonDigitPattern, '');
}