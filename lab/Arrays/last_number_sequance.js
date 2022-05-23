function last_number_sequance(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let start = i - k >= 0 ? i - k : 0;
        let previous_elements = result.slice(start, i);
        let current_element = previous_elements.reduce((a, b) => a + b, 0);
        result.push(current_element);
    }

    return result

}
