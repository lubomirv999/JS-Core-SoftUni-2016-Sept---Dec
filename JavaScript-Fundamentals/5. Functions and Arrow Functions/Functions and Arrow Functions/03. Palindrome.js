function palindrome([input]) {
    let palindrome = false;
    for (let i = 0; i < input.length / 2; i++) {
        if (input[i] == input[input.length - i - 1]){
            palindrome = true;
        } else {
            palindrome = false;
        }
    }
    console.log(palindrome);
}

