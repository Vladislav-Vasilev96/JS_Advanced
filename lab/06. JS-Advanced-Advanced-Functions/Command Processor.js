function solution() {
    let state = '';

    function append(string) {
        state += string
    }

    function removeStart(num) {
        state = state.substring(num)
    }

    function removeEnd(num) {
        state = state.substring(0, state.length - num)
    }

    function print() {
        console.log(state);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    };
}


let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();