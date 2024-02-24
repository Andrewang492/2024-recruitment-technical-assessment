import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SortSelector() {
    const [comparator, setComparator] = React.useState('');

    const handleChange = (event) => {
        setComparator(event.target.value);
    };

    return (
    <Box sx={{ minWidth: '120px', maxWidth: '200px', width: '20%', marginTop: '10px'}}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={comparator}
            label="sort function"
            onChange={handleChange}
            sx={{borderRadius: '10px', boxShadow: '1px 1px 0px grey'}}
        >
            <MenuItem value={0}>Code</MenuItem>
            <MenuItem value={1}>Course Name</MenuItem>
            <MenuItem value={2}>Year Level</MenuItem>
        </Select>
        </FormControl>
    </Box>
    );
}

export default SortSelector