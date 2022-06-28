import ExpenseItem from "./ExpenseItem"

function Expenses(props) {
	return (
		<div className="expenses">
			{props.expenses.length === 0 && <div className="expense-item__empty">No expenses found</div>}
			{props.expenses.length > 0 &&
				props.expenses.map((expense) => {
					return <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} />
				})}
		</div>
	)
}

export default Expenses
