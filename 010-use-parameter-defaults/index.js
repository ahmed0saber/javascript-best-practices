const calcPriceAfterSale = (price, salePercentage = 0) => {
    return price - (price * salePercentage / 100)
}

console.log(calcPriceAfterSale(100, undefined))