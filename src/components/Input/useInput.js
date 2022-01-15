import React, { useState, useEffect } from 'react';

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(true);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation]
                        ? setMinLengthError(true)
                        : setMinLengthError(false);
                    break;

                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true);
                    break;
            }
        }
    }, [value]);

    return {
        isEmpty,
        minLengthError,
    };
};

export const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = e => {
        setValue(e.target.value);
    };

    const onBlur = e => {
        setDirty(true);
    };

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid,
    };
};
