import React, { useState, useEffect } from 'react';
import OnlineCard from './onlineCard';
import Typography from '@mui/material/Typography';
import CustomCard from './Card';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import QualityCard from './QualityCard'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';



function Dashboard() {
  const [isOnline, setOnline] = useState(true);

  useEffect(() => {
    console.log(isOnline);
  }, [isOnline]);

  const handleToggleOnline = (event) => {
    setOnline(event.target.checked);
  };
  
  const [quality, setQuality] = useState('');

const handleQualityChange = (event) => {
  setQuality(event.target.value);
  
  console.log("Quality changed to:", event.target.value);
};

return (
  <div className="dashboard-container">
    <Grid container spacing={2} className="dashboard-grid">
  <Grid item xs={12} md={4} className="dashboard-item">
        <OnlineCard 
          isOnline={isOnline}
          handleToggle={handleToggleOnline}
        />
      </Grid>
      <Grid item xs={12} md={4} className="dashboard-item">
        <CustomCard title="Master Volume" body="Overrides all other sound setting in this application">
          <Slider/>
        </CustomCard>
      </Grid>
      <Grid item xs={12} md={4} className="dashboard-item">
          <CustomCard title="Sound Quality" body="Manually control the music quality in event of poor connection">
            <Select
              value={quality}
              onChange={handleQualityChange}
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>
          </CustomCard>
        </Grid>
      </Grid>
    
    <Typography variant='h5'>System Notification</Typography>
    {!isOnline && (
      <p>
        Your application is offline. You won't be able to share or stream music.
      </p>
    )}
  </div>
);
}

export default Dashboard;