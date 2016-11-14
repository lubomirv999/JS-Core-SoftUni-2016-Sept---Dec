function matchMultiplication([input]) {
    let pattern = /-?\d+[ *.]+-?[\d].[\d]+/g;
    let result = input;
    
    result = result.replace(pattern, (match) =>
    {
        let nums = match.split('*').filter(x => x != '').map(Number);
        return nums[0] * nums[1];
    });

    console.log(result);
}

