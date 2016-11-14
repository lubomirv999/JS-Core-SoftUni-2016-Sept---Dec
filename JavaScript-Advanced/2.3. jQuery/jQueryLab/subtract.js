function subtract() {
    let num1 = $('#firstNumber');
    let num2 = $('#secondNumber');
    let resultDiv = $('#result');

    let result = parseFloat(num1.val()) - parseFloat(num2.val());
    resultDiv[0].textContent = result;
}