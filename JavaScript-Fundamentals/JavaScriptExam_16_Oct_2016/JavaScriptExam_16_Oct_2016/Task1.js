function spyMaster(input) {
    let key = input.shift().toLowerCase();
    let specialKeyCount = 0;
    let tests = [];
    let alphabet = ['%', '$', '!', '#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    input = input.join(" ").split(" ").filter(a=>a != '');
    for (let i = 0; i < input.length; i++) {
        if (input[i].toLowerCase() === key) {
            tests += input[i + 1] + " "
            specialKeyCount++;
        }

    }
    tests=tests.split(".").filter(w=>w!='').join("").split(" ").filter(w=>w!='');

    function containsa(test1) {
        let count =0;
        for (let i = 0; i < test1.length; i++) {
            for (let j = 0; j < alphabet.length; j++) {
                if (test1[i] == alphabet[j]){
                    count++
                }
            }
        }
        if (count==test1.length){
            return true
        }else {
            return false
        }
    }
    let words=[];
    for (let i = 0; i < tests.length; i++) {
        if (tests[i].length >= 8) {
            if (containsa(tests[i])){
                words+=tests[i]+" ";
            }
        }

    }
    words=words.split(" ").filter(w=>w!='');
    for (let i = 0; i < words.length; i++) {
        words[i]=words[i].toLowerCase();
        for (let j = 0; j < words[i].length; j++)
            if (words[i][j]=='#'){
                words[i]=words[i].replace(words[i][j],'3');
            }else if (words[i][j]=='$'){
                words[i]=words[i].replace(words[i][j],'4');
            }else if (words[i][j]=='!'){
                words[i]=words[i].replace(words[i][j],'1');
            }else if (words[i][j]=='%'){
                words[i]=words[i].replace(words[i][j],'2');
            }

    }
    let c=0;
    for (let i = 0; i < input.length; i++) {
        if (input[i].toLowerCase() === key)
            input[i+1]=input[i+1].replace(input[i+1],words[c]);c++;

    }
    for (let i = 0; i < specialKeyCount; i++) {
        var obj = tests[i];

    }
        console.log(input.join(" ").replace(undefined, words[0]));
}

spyMaster([
    'specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'
]);