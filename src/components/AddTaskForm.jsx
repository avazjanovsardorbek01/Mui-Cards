import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const AddTaskForm = ({ addTask, status }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      addTask(title, status);
      setTitle("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", alignItems: "center", marginTop: 2 }}
    >
      <TextField
        label={`Add a new task to ${status}`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        sx={{ marginRight: 2 }}
      />
      <Button type="submit" variant="contained">
        Add
      </Button>
    </Box>
  );
};

export default AddTaskForm;
