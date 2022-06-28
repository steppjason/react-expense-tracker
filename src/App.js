import Card from "./components/UI/Card"
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"
import ExpensesChart from "./components/Expenses/ExpensesChart"
import { useState } from "react"

function App() {
	const DUMMY_DATA = [
		{
			id: 1,
			title: "Toilet Paper",
			date: '2022-12-4',
			amount: 15.97,
		},
		{
			id: 2,
			title: "Television",
			date: '2022-5-21',
			amount: 599.99,
		},
	]

	const [expenses, setExpenses] = useState(DUMMY_DATA)

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses]
		})
	}

	return (
		<div>
			<Card>
				<NewExpense onAddExpense={addExpenseHandler} />
			</Card>
			<Card>
				<ExpensesChart expenses={expenses} />
			</Card>
			<Card>
				<Expenses expenses={expenses}></Expenses>
			</Card>
		</div>
	)
}

export default App
