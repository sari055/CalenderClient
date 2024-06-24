import React, { useState, useRef } from "react";
import { TextField, Box, Button } from "@mui/material";
// ValidatedTextField.js
export default function ValidatedTextField({isDisabled = false, isRequired, value, setForm,name, label, validator, onChange, inputProps = {} }) {
   
    const [error, setError] = useState(false);

    const handleChange = e => {
        const newValue = e.target.value;
        const errorMessage = validator(newValue);
        setError(errorMessage);
        onChange(!errorMessage);
        setForm(e);
    };

    return (
        <TextField
            margin="normal"
            name={name}
            required={isRequired}
            fullWidth
            label={label}
            value={value}
            onChange={handleChange}
            error={!!error}
            helperText={error}
            inputProps={inputProps ? inputProps : {}}
            disabled = {isDisabled}
        />
    );
}

