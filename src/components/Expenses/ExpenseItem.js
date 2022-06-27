import ExpenseDate from "./ExpenseDate"

function ExpenseItem(props) {
	
	return (
		<div className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__title">{props.title}</div>
			<div className="expense-item__price">${props.amount}</div>
		</div>
	)
}

export default ExpenseItem
