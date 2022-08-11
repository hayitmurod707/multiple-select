import React, { useState } from 'react';
import MultipleSelect from './MultipleSelect';
const App = () => {
	const [options] = useState([
		{ value: 1, label: 'Option 1' },
		{ value: 2, label: 'Option 2' },
		{ value: 3, label: 'Option 3' },
		{ value: 4, label: 'Option 4' },
		{ value: 5, label: 'Option 5' },
		{ value: 6, label: 'Option 6' },
	]);
	const [value, setValue] = useState([]);
	return (
		<div style={{ width: '300px' }}>
			<MultipleSelect value={value} options={options} onChange={setValue} />
		</div>
	);
};
export default App;
