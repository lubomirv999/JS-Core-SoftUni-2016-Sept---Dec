function DOMHighlighter(selector) {
    let element = $(selector);
    let deepest = -1;
    let deepestNode;

    findDeepestNode(0, element);

    function findDeepestNode(depth, selector) {
        if (depth > deepest) {
            deepest = depth;
            deepestNode = selector;
        }
        let children = selector.children();

        for (let child of children) {
            findDeepestNode(depth + 1, $(child));
        }
    }

    while (true) {
        deepestNode.addClass('highlight');
        if (deepestNode.attr('id') == element.attr('id'))
            return;

        deepestNode = deepestNode.parent();
    }
}