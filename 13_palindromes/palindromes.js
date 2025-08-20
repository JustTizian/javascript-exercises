const palindromes = function (string) {
    const cleanString = string
    .replaceAll(' ', '')
    .replaceAll('!', '')
    .replaceAll('.', '')
    .replaceAll('?', '')
    .replaceAll(',', '')
    .toLowerCase()
    
    return cleanString.split('').reverse().join('') == cleanString
    
};

// Do not edit below this line
module.exports = palindromes;
