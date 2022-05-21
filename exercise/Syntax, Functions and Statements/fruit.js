    function fruit(frut,weight,price){
        const grams_to_kg = weight/1000
        const needed_money = grams_to_kg * price;
        console.log(`I need $${needed_money.toFixed(2)} to buy ${grams_to_kg.toFixed(2)} kilograms ${frut}.`);
    }

fruit('orange', 2500, 1.80)

