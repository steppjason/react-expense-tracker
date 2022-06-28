import Card from "./components/UI/Card"
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"
import { useState } from 'react'

function App() {

	const DUMMY_DATA = [
		{
			id: 1,
			title: "Toilet Paper",
			date: new Date(2022, 3, 22),
			amount: 15.97,
		},
		{
			id: 2,
			title: "Test",
			date: new Date(2022, 3, 22),
			amount: 15.97,
		},
	]

	const [expenses, setExpenses] = useState(DUMMY_DATA)

	const addExpenseHandler = (expense) => {
		setExpenses(prevExpenses => {
			return [expense, ...prevExpenses]
		})
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
