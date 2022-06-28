import Card from "./components/UI/Card"
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"

function App() {

	const expenses = [
		{
			id: 1,
			title: "Toilet Paper",
			date: new Date(2022, 3, 22),
			amount: 15.97,
		},
	]

	const addExpenseHandler = (expense) => {
		console.log(expense)
	}

	return (
		<div>
			<Card>
				<NewExpense onAddExpense={addExpenseHandler} />
			</Card>
			<Card>
				<Expenses expenses={expenses}></Expenses>
			</Card>
		</div>
	)
}

export default App
