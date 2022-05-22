function mathOperations(n1, n2, operator) {
    switch (operator) {
        case '+': console.log(n1 + n2); break;
        case '-': console.log(n1 - n2); break;
        case '*': console.log(n1 * n2); break;
        case '/': console.log(n1 / n2); break;
        case '%': console.log(n1 % n2); break;
        case '**': console.log(n1 ** n2); break;
    }
}

mathOperations(5, 6, '+')