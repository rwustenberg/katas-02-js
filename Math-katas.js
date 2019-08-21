let products = [{name:'bread',price:3.5},{name:'orange',price:1.3},{name:'gum',price:2.8}]

//020201


let roundNum = (n) => Math.round(n)

console.log(roundNum(3.14))
console.log(roundNum(15.9))

//020202

let prodPrice = (priceArr) => {
	return priceArr.map((pr,ind)=>{
		let rp = Math.round(pr.price)
		pr.price = rp
		return pr
	})
}
console.log(prodPrice(products))


let newArr = products.map((element)=> {
	 return (element.price)
})
 let roundedNums = (prodPrice) => {Math.round(prodPrice)
}

//020203
let numFunction = (num,x) => {
	return num.toFixed(x)
}
	console.log(numFunction(3.148,2))

	//020204
	let powerVar = (num,pow) => {
		return Math.pow(num,pow)
	}
		console.log(powerVar(2,3))

//020205
	let randomNum = (x) => {
		return Math.random()
	}
		console.log(randomNum() * 10)

//020206
