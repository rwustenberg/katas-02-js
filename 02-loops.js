let numbers = [1, 90, 78, 3, 22, 187, 21]
let students = [{name:'Albert'},{name:'Bob'},{name:'Claudia'}]
let mix = [5, 'David', {name:'Ella'}, 23, 'Frank']
let stupidNumbers = [1, 2, 3, 4, 5, 7, 8, 9, 10]

//20101

	//numbers = [1, 90, 78, 3, 22, 187, 21]
	numbers.forEach((n) => {
			console.log(n)
	})

	//20102

		 let studentName = (sn) => {
			 sn.forEach(element => {
				 console.log(element.name)})}
		 	studentName(students)


		//20103

		numbers = [1, 90, 78, 3, 22, 187, 21]
		let newNum = (u) => {
			return u.map(n => n + 1)
		}
		console.log(newNum(numbers))

	//20104
		let studName = (a) => {
			let namesArray = a.map (p => p.name)
			return namesArray
		}
		console.log(studName(students))


//20105

	numbers = [1, 90, 78, 3, 22, 187, 21]
		let newNum2 = (nn) => {
		return nn.filter(v => v >= 22)
	}
			console.log(newNum2(numbers))

//20106
	let numGreat = (num, keyNo) => {
		num.filter(i => i > keyNo)
	}
		console.log(numGreat(numbers, 70))
//20107

let namesLongerThan6 = (longName) => {
	return longName.filter(k => k.name.length > 6)
}
console.log(namesLongerThan6(students))

//20108
let onlyStrings = (os) => {
	return os.filter(j => {
		if(typeof(j) == 'string') {
			return j
		}
	})
}
	console.log(onlyStrings(mix))

//20109
let numGreat100 = (bigNum) => {
	return bigNum.find(c => c > 100)
}
	console.log(numGreat100(numbers))

//20110
let nameBob = (bo) => {
	return bo.find(b => b.name == 'Bob' )
}
	console.log(nameBob(students))

//20111
let sumOfNum = (allNum) => {
	return allNum.reduce((t, q) => t + q)
}
console.log(sumOfNum(numbers))

	//20112

		//let newSumOfNum = (newSum) => {
		//	return newSum(p, o) => p + o
		//}
			//console.log(newSumOfNum(numbers))


	//20113
			 let negSumOfNum = (negNum) => {
				 return negNum.reduce((k, l) => k - l)
			 }
			 	console.log(negSumOfNum(numbers))

	//20114
					let multiplyNum = (multNum) => {
						return multNum.reduce((d, f) => d * f)
					}
						console.log(multiplyNum(numbers))

	//20115
				let sortArr = (newArr) => {
						return newArr.sort((w, v) => v - w)
			}
				console.log(sortArr(numbers))

	//20116
			let nameArr = (newNameArr) => {
					return newNameArr.sort((z, kl) => z.name.length - kl.name.length)
			}
					console.log(nameArr(students))

//20117
let newArr2 = (studentsArray, numbersArray) => {
		return studentsArray.map( (student, index) => {
			student.age = numbersArray[index]
			return student
		})
}
		console.log(newArr2(students, numbers))
//20118
		let missingNum = (numArray) => {
			let foundMissingNumber = 0
				numArray.forEach( (num, index) => {
					if(index !== 0) {
					if(num !== numArray[index - 1] + 1) {
						foundMissingNumber = num - 1
			return foundMissingNumber
          }
				}
			})
			return foundMissingNumber
		}
		console.log(missingNum(stupidNumbers))
