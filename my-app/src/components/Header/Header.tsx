import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Link,
  InputBase,
  Paper,
} from "@mui/material";
import AttachmentIcon from "@mui/icons-material/Attachment";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  return (
    <Box>
      <AppBar position="static">
        <Container>
          <Toolbar sx={{ maxWidth: "1200px" }}>
            <Link
              href="#"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              <IconButton
                sx={{ color: "#fff" }}
                aria-label="logo"
                size="large"
                edge="start"
              >
                <AttachmentIcon />
              </IconButton>
            </Link>
            <Typography
              variant="h6"
              component="div"
              sx={{ pl: 1, flexGrow: 1 }}
            >
              CLC
            </Typography>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
                mx: 1,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search CLC"
                inputProps={{ "aria-label": "Search CLC" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Signup</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
