import ExpenseItem from "./ExpenseItem"

function Expenses() {
	const expenses = [
		{
			id: 1,
			title: "Toilet Paper",
			date: new Date(2022, 3, 22),
			amount: 15.97,
		},
	]

	return (
		<div className="expenses">
			<ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount} />
			<ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount} />
		</div>
	)
}

export default Expenses