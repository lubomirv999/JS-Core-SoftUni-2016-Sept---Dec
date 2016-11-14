function euclidAlgorithm(firstNum, secondNum) {
    if (firstNum == 0) return secondNum;

    if (secondNum == 0) return firstNum;

    return euclidAlgorithm(secondNum, firstNum % secondNum);
}
