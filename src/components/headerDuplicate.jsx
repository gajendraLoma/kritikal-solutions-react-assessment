import * as React from "react";
import { extendTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import Grid from "@mui/material/Grid";
import Dashboard from "./dashboard";
import { Toolbar, Typography, InputBase, IconButton, Menu, MenuItem, Box, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";

const NAVIGATION = [
  { kind: "header", title: "Main items" },
  { segment: "dashboard", title: "Cases", icon: <DashboardIcon /> },

];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: "class",
  breakpoints: {
    values: { xs: 0, sm: 600, md: 600, lg: 1200, xl: 1536 },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

export default function SearchAppBar1() {
  const router = useDemoRouter("/dashboard");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppProvider navigation={NAVIGATION} router={router} theme={demoTheme}>
      <DashboardLayout>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box 
         sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "background.default",
          color: "text.primary",
          px: 1,
          borderRadius: 1,
          border: "1px solid",
          borderColor: "divider",
        }}
             
             >
              <InputBase placeholder="Search…" sx={{ ml: 1, flex: 1 }} />
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Box>
            <IconButton onClick={handleMenu} color="inherit">
              <AccountCircle />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
        <Divider />
        <Grid container spacing={0} sx={{ width: "100%", margin: 0 }}>

     
          <Grid item xs={12} md={12} className="aaaa">
       
            <Dashboard />
          </Grid>
         
        </Grid>
      </DashboardLayout>
    </AppProvider>
  );
}
