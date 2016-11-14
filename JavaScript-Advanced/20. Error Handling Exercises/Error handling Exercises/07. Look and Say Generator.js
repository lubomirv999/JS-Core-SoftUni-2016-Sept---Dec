function* lookAndSayGeneratot(start) {
    start += '';
    
    while (start = generateNextNode(start)) {
        yield start;
    }

    function generateNextNode(start) {
        let result = '';
        
        for (let i = 0; i < start.length; i++) {
            let current = start[i];
            let currentCount = 1;

            for (let innerIndex = i + 1; innerIndex < start.length; innerIndex++) {
                let next = start[innerIndex];
                if (current === next) {
                    currentCount++;
                } else {
                    i = innerIndex - 1;
                    break;
                }
                i = innerIndex;
            }
            result += `${currentCount}${current}`;
        }
        return result;
    }
}

// function * lookAndSay(start) {
//     let next = start + '';
//
//     while (true) {
//         next = next.replace(/(.)\1*/g, function(seq, p1){ return seq.length.toString() + p1 });
//         yield next;
//     }
// }

