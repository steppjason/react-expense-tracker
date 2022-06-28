import { useState } from "react"

function ExpenseForm(props) {
	const [data, setData] = useState({
		title: '',
		amount: '',
		date: '',
	})

	const submitHandler = (e) => {
		e.preventDefault()
		const expenseData = data
		props.onSaveExpenseData(expenseData);
		clearFormData()
	}

	const titleChangeHandler = (e) => {
		setData((prevState) => {
			return {
				...prevState,
				title: e.target.value,
			}
		})
	}

	const amountChangeHandler = (e) => {
		setData((prevState) => {
			return {
				...prevState,
				amount: e.target.value,
			}
		})
	}

	const dateChangeHandler = (e) => {
		setData((prevState) => {

			let newDate = new Date(e.target.value)
			const month = newDate.toLocaleString("en-US", { month: "2-digit" })
			const day = newDate.toLocaleString("en-US", { day: '2-digit' })
			const year = newDate.getFullYear();

			return {
				...prevState,
				date: [year, month, day].join('-'),
			}
		})

		console.log(e.target.value)
	}

	const clearFormData = () => {
		setData({
			title: '',
			amount: '',
			date: '',
		})
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="expense-form__controls">
				<div className="expense-form__control">
					<label>Title</label>
					<input type="text" value={data.title} onChange={titleChangeHandler} />
				</div>
				<div className="expense-form__control">
					<label>Amount</label>
					<input type="number" value={data.amount} min="0.01" step="0.01" onChange={amountChangeHandler} />
				</div>
				<div className="expense-form__control">
					<label>Date</label>
					<input type="date" value={data.date} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
				</div>
			</div>
			<div className="expense-form__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	)
}

export default ExpenseForm
