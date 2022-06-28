import ChartBar from "./ChartBar"

function Chart(props) {
	const dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.value)
	const totalMaxValue = Math.max(...dataPointsValue)

	console.log(totalMaxValue)

	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => {
				return <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaxValue} label={dataPoint.label} />
			})}
		</div>
	)
}

export default Chart
