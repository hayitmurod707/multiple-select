import { Fragment, useState } from 'react';
import MultipleSelect from './MultipleSelect';
const App = () => {
   const [options] = useState([
      { value: 1, label: 'Option 1' },
      { value: 2, label: 'Option 2' },
      { value: 3, label: 'Option 3' },
      { value: 4, label: 'Option 4' },
      { value: 5, label: 'Option 5' },
      { value: 6, label: 'Option 6' },
      { value: 7, label: 'Option 7' },
   ]);
   const [value, setValue] = useState([]);
   return (
      <Fragment>
         <h1>Multiple select component with react-select</h1>
         <h4>
            <a href='https://www.github.com/hayitmurod707/multiple-select'>
               Github
            </a>
         </h4>
         <div style={{ width: '300px' }}>
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
