import * as React from 'react';
import Grid from "@mui/material/Grid2";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Cards from './cards';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridViewIcon from '@mui/icons-material/GridView';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Dashboard() {
  const [value, setValue] = React.useState(0);
  const [viewMode, setViewMode] = React.useState('grid');  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const toggleViewMode = (mode) => {
    setViewMode(mode);
    console.log('mode',mode)
  };

  return (
    <div>
      <Grid >
        <Grid item xs={12}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="All Cases" {...a11yProps(0)} />
            <Tab label="Favourite Cases" {...a11yProps(1)} />
            <Tab label="Favourite Media" {...a11yProps(2)} />
          </Tabs>
     

        <Grid item xs={12}>
        <Stack direction="row" spacing={2} pt={4} pl={3}>
      <Button variant="outlined" size="large" startIcon={<AddIcon />}>
        New Case 
      </Button>
      <Button variant="contained" size="large" endIcon={<FilterAltIcon />}>
        Filter
      </Button>
      <Button variant="contained" size="large" endIcon={<ClearAllIcon />}>
        Newest
      </Button>
      <Button variant="outlined" size="large" endIcon={<ViewListIcon />}
       sx={{
        '& .MuiButton-endIcon': {
          margin: "0px !important" 
        },
      }}
      onClick={() => toggleViewMode('list')} 
      />
   
      <Button variant="outlined" size="large" endIcon={<GridViewIcon />}
        sx={{
          '& .MuiButton-endIcon': {
            margin: "0px !important" 
          },
        }}
        onClick={() => toggleViewMode('grid')}
      />

  
    </Stack>

        </Grid>
        </Grid>
        <CustomTabPanel value={value} index={0}>
        
          <Cards viewMode={viewMode} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Cards viewMode={viewMode} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Cards viewMode={viewMode} />
        </CustomTabPanel>
      </Grid>
    </div>
  );
}

export default Dashboard;
