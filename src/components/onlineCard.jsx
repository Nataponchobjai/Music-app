import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { pink } from '@mui/material/colors';
import { styled, alpha } from '@mui/material/styles';

const PinkSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));

const label = { inputProps: { 'aria-label': 'Color switch demo' } };

export default function OnlineCard(props) {
  const { isOnline, handleToggle } = props;

  return (
    <Card sx={{ maxWidth: 275, margin: "64px" }}>
      <CardContent>
        <Typography variant='h5' sx={{ marginBottom: "24px" }}>
          Online Mode
        </Typography>
        <Typography variant="body2">
          Is the application connected to the internet?
        </Typography>
      </CardContent>
      <CardActions>
        <PinkSwitch {...label} checked={isOnline} onChange={handleToggle} />
      </CardActions>
    </Card>
  );
}
