let phrase = 'JavaScript is the best'
let prices = ['$22', '€99', '$75', '£80', '€43', '$22']
let names = ['anna', 'john', 'bob', 'frank']

//020301

//words
let splitPhrase = (splt) => {
	return splt.split(' ')
}
console.log(splitPhrase(phrase))

let phraseArr = (arr) => {
	return arr.map(element => {
		return element.split('').reverse().join('')
	})
}
console.log(phraseArr(splitPhrase(phrase)))

let joinArr = (j) => {
	return j.join(' ')
}
console.log(joinArr(phraseArr(splitPhrase(phrase))))

let reversePhrase = (p) => {
	let words = p.split(' ')
	let arr = words.map(element => {
		return element.split('').reverse().join('')
	})
	return arr.join(' ')
}
console.log(reversePhrase(phrase))

//020302

let newArr = (priceArr) => {
	let spt = priceArr.map(element => {
		let s = element.split('')
		let b = s.shift()
		let c = s.join('')
		let obj = {currency: b,
		value: c}
		return obj
	})
	return spt
}
	console.log(newArr(prices))

//020303
let nameArr = (n) => {
	let newArr = n.map(name => {
		return name.split('').reverse().join('')
	})
	newArr.forEach((name,ind) => { if(name === n[ind]) {
		console.log(name)
		}
	})
}
nameArr(names)

//020304

const makeRomanNumeral = (num) => {
	let numerals = [{sym: 'm', num:1000}, {sym: 'cd', num: 900}, {sym:'d', num:500}, {sym:'cd', num:400}, {sym:'c', num:100}, {sym:'xc', num:90}, {sym:'l', num:50}, {sym:'xl', num:40}, {sym:'xx', num:20}, {sym:'ixx', num:19}, {sym:'vx', num:15}, {sym:'xi', num:11}, {sym:'x', num:10}, {sym:'ix', num:9}, {sym:'viii', num:8}, {sym:'vii', num:7}, {sym:'vi', num:6}, {sym:'v', num:5}, {sym:'iv', num:4}, {sym:'iii', num:3}, {sym: 'ii', num:2}, {sym:'i', num:1}]
	let number = () => {
		let numArr =	[]
		numerals.forEach((obj)=> {
				while(num >= obj.num) {
				numArr.push(obj.sym)
				num = num - obj.num
				}
		})
		return numArr.join('')
	}
	return number()
}
console.log(makeRomanNumeral(890))

//020305
let numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
	//if number == 3,6,9,12,15,18 return fizz;
	//if number == 5,10,15,20 return buzz;
	//if number == 15 return fizzbuzz;
	let number = (n) => n.map((num) => {
		if(num % 3 === 0){
			return 'fizz'
		} else if (num % 5 === 0) {
			return 'buzz'
		}
			else if ((num % 3 === 0) && (num % 5 === 0)) {
				return 'fizz buzz'
		} else {
			return num
		}
	})
console.log(number(numbers))

//020306
// I am stuck here and need help
let numberFuction = (a, b) =>
	let c = a + b
let numFunc = ((a,b) => {}, c, d, e) => {
	numFunc(((a,b)+ a + b)- e)
}
console.log(numFunc(numberFuction))
