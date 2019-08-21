//020501

let Car = class {
	constructor(make, model, colour) {
		this.make = make
		this.model = model
		this.colour = colour
	}
}
let buildCar = (make, model, colour) => {
	return new Car(make, model, colour)
}
 console.log(buildCar('Honda', 'Civic', 'Red'))

//020502
let names = ['Alice', 'Bernard', 'Catherine', 'David']
let jobs = ['Accountant', 'Biz Manager', 'Cleaner', 'Director']

let Employee = class {
	constructor(name, job) {
		this.name = name
		this.job = job
	}
}
let makeEmployees = (namesArray, jobsArray) => {
	return namesArray.map((name, index) => {
		return new Employee(name, jobsArray[index])
	})
}
console.log(makeEmployees(names, jobs))

//020503
let belts = ['white', 'yellow', 'orange', 'green', 'blue', 'brown', 'black']
let Karateka = class {
	constructor(name) {
		this.name = name
		this.belt = belts[0]
	}
	increaseRank() {
		let currentBeltIdx = belts.indexOf(this.belt)
		let newBeltIdx = currentBeltIdx + 1
		if(newBeltIdx < belts.length){
				this.belt = belts[newBeltIdx]
		}
	}
}

let kPerson = new Karateka('Ruth')

let fight = (kP) => {
	let seconds = 0
	let fightTimer = setInterval(() => {
		seconds = seconds + 1
	 	let score = Math.round(Math.random() * 10)
		console.log(`score: ${score}`)
		console.log(`{name: ${kP.name}, belt: ${kP.belt}}`)
		if(score > 8) {
			kP.increaseRank()
		}
		if(seconds == 20) {
			clearInterval(fightTimer)
		}
	}, 1000)
}
fight(kPerson)

//020504
let names = ['apples', 'bananas', 'bread', 'cookies', 'broccoli', 'onions']
let prices = [20, 12, 24, 53, 32, 15]
let discounts = [0, 0, 10, 25, 0, 5]

class Product {
	constructor(name, price) {
		this.name = name
		this.price = price
	}
	applyDiscount(discount) {
		this.price = ((100 - discount) / 100) * this.price
	}
}

class Receipt {
	constructor(products) {
		this.products = products
	}
	calcTotal() {
		return this.products.reduce((acc, product) => acc + product.price, 0)
	}
}

let getReceipt = (names, prices, discounts) => {
	let products = names.map((name, ind) => {
		return new Product(name, prices[ind])
	})
	console.log(products)
	products.forEach((product, ind) => {
		product.applyDiscount(discounts[ind])
	})
	console.log(products)
	let receipt = new Receipt(products)
	let total = receipt.calcTotal()
	console.log(total)
}

getReceipt(names, prices, discounts)
