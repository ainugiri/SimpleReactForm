import { useState } from 'react';
export default function SimpleForm() {
    const [inputValue, setInputValue] = useState('');
    const [list, setList] = useState([]);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() !== '') {
            setList([...list, inputValue]);
            setInputValue('');
        }
    };


    return (    
        <div className="App">
            <h2>Simple Form</h2>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter item"
            />
            <button type="submit">Add</button>
            </form>
            <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        </div>
    );
}