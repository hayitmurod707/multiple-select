import { Fragment, useState } from "react";
import MultipleSelect from "./MultipleSelect";
const App = () => {
	const [options] = useState([
		{ value: 1, label: "Lamborghini" },
		{ value: 2, label: "Ferrari" },
		{ value: 3, label: "BMW" },
		{ value: 4, label: "Mercedes-benz" },
		{ value: 5, label: "Bugatti" },
	]);
	const [value, setValue] = useState([]);
	return (
		<Fragment>
			<h1>Multiple select component with react-select</h1>
			<h4>
				<a href="https://www.github.com/hayitmurod707/multiple-select">
					Github
				</a>
			</h4>
			<div style={{ width: "400px" }}>
				<MultipleSelect
					onChange={setValue}
					options={options}
					value={value}
				/>
			</div>
		</Fragment>
	);
};
export default App;
