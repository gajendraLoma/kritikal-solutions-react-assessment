import * as React from 'react';
import Grid from "@mui/material/Grid2";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Cards  from './cards';

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

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item sx={12}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All Cases" {...a11yProps(0)} />
          <Tab label="Favourite Cases" {...a11yProps(1)} />
          <Tab label="Favourite Media" {...a11yProps(2)} />
        </Tabs>

        <CustomTabPanel value={value} index={0}>
   <Cards />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Cards />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Cards />
      </CustomTabPanel>
        </Grid>

     
      </Grid>
    </div>
  );
}
<style>
    {`
    .css-nl63yj{
        padding: 10px 0px !important;
        }

    `}
    </style>


export default Dashboard;
