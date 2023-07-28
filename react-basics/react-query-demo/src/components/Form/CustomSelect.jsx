import * as React from 'react';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function CustomSelect({ options, defaultValue, onSelectHandler }) {

    return (
        <Select
            placeholder="Select a …"
            indicator={<KeyboardArrowDown />}
            defaultValue={defaultValue}
            onChange={(e,val) => onSelectHandler(val)}
            sx={{
                width: 240,
                [`& .${selectClasses.indicator}`]: {
                    transition: '0.2s',
                    [`&.${selectClasses.expanded}`]: {
                        transform: 'rotate(-180deg)',
                    },
                },
            }}
        >
            {
                options.length ? options.map(option => <Option key={option.value} value={option.value}>{option.title}</Option>) : ""
            }

        </Select>
    );
}