import React, { FC } from 'react';
import { Placeholder } from 'react-bootstrap';
import Select from 'react-select';

interface Props {
    options: Array<object> | undefined,
    placeholder?: string,
    className?: string,
    name: string
}

const ReactSelect: FC<Props> = ({
    placeholder,
    className,
    options,
    name
}) => {
    return (
        <Select
            className={`app-single-select ${className}`}
            classNamePrefix="select"
            options={options}
            isClearable={true}
            isSearchable={true}
            placeholder={Placeholder}
            name={name}
        />
    )
}

export default ReactSelect