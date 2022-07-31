import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import cw from "../assets/cw.jpeg";


export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [login, setLogin] = React.useState(false);

  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    // navigate("/login");
    setAnchorEl(null);
  };
  const handleProfile=()=>{
    navigate("profile");
     setAnchorEl(null);
  };
  const handleLogin=()=>{
    navigate("login");
    setAnchorEl(null);
  };
  const handleNew=()=>{
    navigate("newBlog");
    setAnchorEl(null);
  };
  const handleRegister=()=>{
    navigate("register");
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img
            onClick={() => navigate("/dashboard")}
            src={cw}
            alt="cw"
            height="25px"
            style={{ cursor: "pointer" }}
          />

            <Typography
              style={{ cursor: "pointer" }}
              variant="h5"
              component="div"
              sx={{
                fontFamily: "Girassol",
                flexGrow: 1,
                border: 2,
              }}
            >
              {"-------------<SY/>BLOG-------------"}
            </Typography>

          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {login && (
                  <>
                    <MenuItem onClick={handleProfile}>Profile</MenuItem>
                    <MenuItem onClick={handleNew}>New</MenuItem>
                    <MenuItem onClick={handleLogin}>Logout</MenuItem>
                  </>
                )}

                {!login && (
                  <>
                    <MenuItem onClick={handleLogin}>Login</MenuItem>
                    <MenuItem onClick={handleRegister}>Register</MenuItem>
                  </>
                )}
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
