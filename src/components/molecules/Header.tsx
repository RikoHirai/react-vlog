import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "#f2820a" }}>
        <Typography
          variant="h6"
          color="inherit"
          sx={{ ml: 2, fontFamily: "serif", width: "100px", height: "40px" }}
        >
          ABOUT
        </Typography>
      </AppBar>
    </Box>
  );
};

export default Header;
