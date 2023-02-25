import * as React from "react";
import {Paper, InputBase, IconButton} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchField() {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
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
  );
}
