let products = [{name:'bread',price:3.5},{name:'orange',price:1.3},{name:'gum',price:2.8}]

//020201


let roundNum = (n) => Math.round(n)

console.log(roundNum(3.14))
console.log(roundNum(15.9))

//020202
let productsPrice = (prodPrice) => {
	return Math.round(prodPrice.price)
}
console.log(productsPrice(products))
