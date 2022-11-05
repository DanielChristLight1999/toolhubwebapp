import { Bar } from "react-chartjs-2";
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale} from 'chart.js'
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

function Barchat() {
return (

	<div style={{ maxWidth: "400vh" }}>
	    <Bar
		data={{
			// Name of the variables on x-axies for each bar
			labels: ["replaced_by", "for_wikis", "icon", "available_ui_languages",
                     "tool_type", "api_url", "developer_docs_url", "user_docs_url", "feedback_url",
                     "privacy_policy_url", "translate_url", "wikidata_qid", "bugtracker_url", "repository"],
			datasets: [
			{
				// Label for bars
				label: "total count/value",
				// Data or value of your each variable
				data: [998, 917, 965, 926, 553, 991, 894, 974, 985, 998, 995, 993, 834, 658],
				// Color of each bar
				backgroundColor: ["aqua", "green", "red", "yellow", "aqua", "aqua", "aqua", "aqua", "aqua", "aqua", "aqua", "aqua", "aqua", "aqua"],
				// Border color of each bar
				borderColor: ["aqua", "green", "red", "yellow", "aqua", "aqua", "aqua", "aqua", "aqua", "aqua", "aqua", "aqua", "aqua", "aqua"],
				borderWidth: 0.5,
			},
			],
		}}
		// Height of graph
		height={400}
		options={{
			maintainAspectRatio: false,
			scales: {
			yAxes: [
				{
				ticks: {
					// The y-axis value will start from zero
					beginAtZero: true,
				},
				},
			],
			},
			legend: {
			labels: {
				fontSize: 15,
			},
			},
		}}
		/>
	</div>
);
}

export default Barchat;
