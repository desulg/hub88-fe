import React, { FC } from "react";
import './index.css';

interface InputProps {
    handleCodeChange: (newCode: string) => void;
}

const Input: FC<InputProps> = ({handleCodeChange}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleCodeChange(e.target.value.toUpperCase());
    }
      
    return (
        <input className="input" type="text" onChange={handleChange}/>
    )
}

export default Input;