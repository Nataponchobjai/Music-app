import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Slider from '@mui/icons-material/Slider';

const label = { inputProps: { 'aria-label': 'Switch demo'} };

export default function OnlineCard(props) {
    return (
        <Card sx={{ maxWidth: 275, margin: "64px", }}>
            <CardContent>
            <Typography variant='h5' sx={{marginButtom: "24px"}}>
                Online Mode
            </Typography>
        <Typography>
            is the applicatino connected to the internet?
        </Typography>
            </CardContent>
            <CardActions>
            <Slider {...label} defaultChecked={props.isOnline} onCgange={() => props.Slider}  ></Slider>
            </CardActions>

        </Card>
    );
}