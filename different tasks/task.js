let KiloPrice = 0.025;
let sumPrice = 0;
let price = 0.50;


let counter = 1;


while (sumPrice < price) { // Додано обмеження на кількість ітерацій
    if (sumPrice + KiloPrice > price) {
        break; // Зупиняємо цикл, якщо наступний крок перевищить цільову ціну
    }
    sumPrice += KiloPrice;
    counter++;
}

console.log(counter);