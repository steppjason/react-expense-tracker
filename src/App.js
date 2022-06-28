import Card from "./components/UI/Card"
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"

function App() {
	return (
		<div>
			<Card>
				<NewExpense />
			</Card>
			<Card>
				<Expenses></Expenses>
			</Card>
		</div>
	)
}

export default App
