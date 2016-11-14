function orderRectangles(data) {
    let rects = [];
    for(let [widht, height] of data){
        let rect = createRect(widht, height);
        rects.push(rect);
    }

    let bigRect = rects.sort((a, b)=> a.compareTo(b));
    return bigRect;

    function createRect(width, height) {
        let rect = {
            width: width,
            height: height,
            area: ()=> rect.width * rect.height,
            compareTo: function (other) {
                let result = other.area() - rect.area();
                return result || (other.width - rect.width);
            }
        };
        return rect;
    }
}

