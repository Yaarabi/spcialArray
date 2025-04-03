function isSpecialArray(arr) {
	let n=arr.length
	let score= 0
	for (let i=0; i<n; i++){
		let a=i%2
		let b= arr[i]%2
		if ((a === 0 && b === 0) || (a === 1 && b === 1)){
			score+=1
		}
	}	
		return score===n
	
}