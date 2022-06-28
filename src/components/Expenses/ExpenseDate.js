function ExpenseDate(props) {
	const date = new Date(props.date)
	const month = date.toLocaleString("en-US", { month: "2-digit" })
	const day = date.toLocaleString("en-US", { day: '2-digit' })
	const year = date.getFullYear();

	return (
		<div className="expense-item__date">{month}/{day}/{year}</div>
	)
}

export default ExpenseDate
