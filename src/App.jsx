import React, { useState } from 'react';
import MultipleSelect from './MultipleSelect';
const App = () => {
	const [options] = useState([
		{ value: 1, label: 'Lamborghini' },
		{ value: 2, label: 'Ferrari' },
		{ value: 3, label: 'BMW' },
		{ value: 4, label: 'Mercedes-benz' },
		{ value: 5, label: 'Bugatti' },
	]);
	const [value, setValue] = useState([]);
	return (
		<div style={{ width: '350px' }}>
			<MultipleSelect onChange={setValue} options={options} value={value} />
		</div>
	);
};
export default App;
