function sum() {
    let result = (() => {
        let dom = {};

        return {
            init: (selector1, selector2, resultSelector) => {
                dom.firstNum = $(selector1);
                dom.secondNum = $(selector2);
                dom.resultBox = $(resultSelector);
            },
            add: () => {
                dom.firstNum = Number($('#num1').val());
                dom.secondNum = Number($('#num2').val());
                let resultValue = dom.firstNum + dom.secondNum;
                dom.resultBox.val(resultValue);
            },
            subtract: () => {
                dom.firstNum = Number($('#num1').val());
                dom.secondNum = Number($('#num2').val());
                let resultValue = dom.firstNum - dom.secondNum;
                dom.resultBox.val(resultValue);
            }
        }
    })();
    return result;
}