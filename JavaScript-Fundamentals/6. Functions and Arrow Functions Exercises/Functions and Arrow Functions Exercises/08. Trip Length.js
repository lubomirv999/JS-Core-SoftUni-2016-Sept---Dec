function tripLength([x1, y1, x2, y2, x3, y3]) {
    [x1, y1, x2, y2, x3, y3] = [x1, y1, x2, y2, x3, y3].map(Number);

    let ab = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    let bc = Math.sqrt((x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3));
    let ac = Math.sqrt((x1 - x3) * (x1 - x3) + (y1 - y3) * (y1 - y3));

    if(ab + bc <= bc + ac){
        console.log('1->2->3: ' + Number(ab + bc));
    } else if(ab + ac <= ac + bc){
        console.log('2->1->3: ' + Number(ab + ac));
    } else {
        console.log('1->3->2: ' + Number(ac + bc));
    }
}

