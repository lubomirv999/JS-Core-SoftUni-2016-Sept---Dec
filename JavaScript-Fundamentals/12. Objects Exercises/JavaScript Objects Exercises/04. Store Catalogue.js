function storeCatalogue(input) {
    let initials = new Map();
    for (let i = 0; i < input.length; i++) {
        let itemInfo = input[i].split(" : ");
        let productName = itemInfo[0];
        let productPrice = Number(itemInfo[1]);
        let initial = productName[0];

        if(!initials.has(initial)){
            initials.set(initial, new Map());
        }

        initials.get(initial).set(productName, productPrice);
    }

    function alphabeticalSort(a, b) {
        return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
    }

    let sortedInitials = [...initials].sort(alphabeticalSort);
    for (let [key, val] of sortedInitials) {
        console.log(key);
        let sortedProducts = [...val].sort(alphabeticalSort);
        for(let [product, price] of sortedProducts){
            console.log(`  ${product}: ${price}`);
        }
    }
}
