import React, { FC } from "react";

interface InputProps {
    handleCodeChange: (newCode: string) => void;
}

const Input: FC<InputProps> = ({handleCodeChange}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleCodeChange(e.target.value);
    }
      
    return (
        <div>
            <label htmlFor=""></label>
            <input type="text" onChange={handleChange}/>
        </div>
    )
}

export default Input;