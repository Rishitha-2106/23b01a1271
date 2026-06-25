import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();

  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar>
        <NotificationsIcon sx={{ mr: 1 }} />

        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
          }}
        >
          Campus Notifications
        </Typography>

        <Stack direction="row" spacing={1}>
          <Button
            component={Link}
            to="/"
            color="inherit"
            variant={
              location.pathname === "/"
                ? "outlined"
                : "text"
            }
          >
            All Notifications
          </Button>

          <Button
            component={Link}
            to="/priority"
            color="inherit"
            variant={
              location.pathname === "/priority"
                ? "outlined"
                : "text"
            }
          >
            Priority Inbox
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}