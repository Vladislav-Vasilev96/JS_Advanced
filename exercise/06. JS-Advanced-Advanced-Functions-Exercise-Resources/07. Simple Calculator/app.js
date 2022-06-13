function calculator() {
    let feild1 = null;
    let feild2 = null;
    let result = null;

    return {
        init,
        add,
        subtract
    }

    function init(selector1, selector2, resultSelector) {
        feild1 = document.querySelector(selector1);
        feild2 = document.querySelector(selector2);
        result = document.querySelector(resultSelector);

    }

    function add() {
        result.value = Number(feild1.value) + Number(feild2.value)
    }
    function subtract() {
        result.value = Number(feild1.value)- Number(feild2.value)

    }
}




