import React, { FC } from "react";
import './index.css';

interface InputProps {
    testId: string;
    handleCodeChange: (newCode: string) => void;
}

const Input: FC<InputProps> = ({handleCodeChange, testId}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleCodeChange(e.target.value.toUpperCase());
    }
      
    return (
        <input className="input" data-testid={testId} type="text" onChange={handleChange}/>
    )
}

export default Input;