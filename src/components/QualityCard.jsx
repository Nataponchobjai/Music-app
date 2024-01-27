import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall() {
  const [quality, setQuality] = React.useState('');

  const handleChange = (event) => {
    setQuality(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Quality</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={quality}
        label="Quality"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="Low">Low</MenuItem>
        <MenuItem value="Normal">Normal</MenuItem>
        <MenuItem value="High">High</MenuItem>
      </Select>
    </FormControl>
  );
}
