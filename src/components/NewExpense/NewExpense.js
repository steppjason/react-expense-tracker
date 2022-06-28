import ExpenseForm from "./ExpenseForm"

function NewExpense(props) {

	const saveExpenseDataHandler = (expenseData) => {
		const data = {
			...expenseData,
			id: Math.random().toString()
		}

		props.onAddExpense(data)
	}

	return (
		<div className="expense-form">
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	)
}

export default NewExpense
