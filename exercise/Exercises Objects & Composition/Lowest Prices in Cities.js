function solve(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        let text = arr[i]
        let product_info = text.split(' | ')
        let town = product_info[0];
        let product = product_info[1];
        let price = Number(product_info[2]);
        if (obj[product]) {
            if (obj[product].price >= price) {
                obj[product] = { town, price };
            }
        }
        else {
            obj[product] = { town, price };
        }
    }

    let product_names = Object.keys(obj)
  
    for (let i = 0; i < product_names.length; i++) {

        let productName = product_names[i]
        console.log(`${productName} -> ${obj[productName].price} (${obj[productName].town})`)
    }
}


solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)