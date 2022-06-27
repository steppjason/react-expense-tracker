import ExpenseItem from "./components/ExpenseItem"

function App() {
	const expenses = [
		{
			id: 1,
			title: "Toilet Paper",
			date: new Date(2022, 3, 22),
			amount: 15.97,
		},
	]

	return (
		<div>
			<h2>Let's get started!</h2>
			<ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount} />
		</div>
	)
}

export default App
