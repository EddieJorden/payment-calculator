const loanAmount = 10000;

const apr = 0.05;

const interest = loanAmount * apr;

const loanTerm = 60;

const calculateAverageInterest = (loanAmount) => {
	let loan = loanAmount;
	const averageMonthlyPrinciple = loan / loanTerm;
	let acc = 0;
	for (let i = 0; i < loanTerm; i++) {
		const currentMonthsInterest = (loan * apr) / 12;
		acc = acc + currentMonthsInterest;
		loan = loan - averageMonthlyPrinciple;
		console.log('month' + i, loan);
	}
	const averageMonthlyInterest = acc / loanTerm;
	const totalMonthlyPayment = averageMonthlyInterest + averageMonthlyPrinciple;
	console.log(acc + loanAmount);
	return totalMonthlyPayment;
};

console.log(calculateAverageInterest(loanAmount));
