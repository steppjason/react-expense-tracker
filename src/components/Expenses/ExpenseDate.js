function ExpenseDate(props) {
	const month = props.date.toLocaleString("en-US", { month: "2-digit" })
	const day = props.date.toLocaleString("en-US", { day: '2-digit' })
	const year = props.date.getFullYear();

	return (
		<div className="expense-item__date">{month}/{day}/{year}</div>
	)
}

export default ExpenseDate
