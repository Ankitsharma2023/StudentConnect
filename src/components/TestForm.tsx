'use client'
import { useState } from "react";
import {create} from "./create";
const TestForm = (props: {email:string|null|undefined}) => {
    const email =props.email;
    const [inputName, setInputName] = useState('');
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputName(e.target.value);
    };
    
    return (
        <div>
            <h1>Test Page</h1>
            <form onSubmit={(e)=>{e.preventDefault();create(inputName,email)}}>
                <input
                    className="text-black"
                    type="text"
                    value={inputName}
                    onChange={handleNameChange}
                    placeholder="Enter name"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
export default TestForm;