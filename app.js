// ALGORITHM QUESTIONS 

// REVERSE A STRING WITHOUT BUILT-IN METHODS
function reverse(str) {
    for(var i = str.length-1; i >= 0 ; i--) { 
        console.log(str[i])
    }
    return str[i];
}
reverse('reverse me');

// REVERSE A STRING USING ARRAY METHOS 

const reverseWithMethod = (str) => {
    const result = str.split('').reverse().join('');
    console.log(result)
    return result;
}

reverseWithMethod('reversed');

