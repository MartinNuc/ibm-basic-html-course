function isPalindrome(input) {
	const reversed = input.split('').reverse().join('');
	return input === reversed;
}

console.log(isPalindrome('anna'));
console.log(isPalindrome('notpalindrome'));
