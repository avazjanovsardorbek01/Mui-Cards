import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Select,
  MenuItem,
  Box,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddTaskForm from "./AddTaskForm";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", status: "open" },
    { id: 2, title: "Task 2", status: "pending" },
    { id: 3, title: "Task 3", status: "inprog" },
    { id: 4, title: "Task 4", status: "complete" },
  ]);

  const addTask = (title, status) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      status,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const changeStatus = (id, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <Grid container spacing={4} justifyContent="center">
      {["open", "pending", "inprog", "complete"].map((status) => (
        <Grid item xs={12} sm={6} md={3} key={status}>
          <Paper elevation={3} sx={{ padding: 2, backgroundColor: "#ffffff" }}>
            <Typography variant="h6" gutterBottom align="center">
              {status.toUpperCase()}
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
            <List>
              {tasks
                .filter((task) => task.status === status)
                .map((task) => (
                  <ListItem
                    key={task.id}
                    secondaryAction={
                      <>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => deleteTask(task.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                        <Select
                          value={task.status}
                          onChange={(e) =>
                            changeStatus(task.id, e.target.value)
                          }
                          sx={{ marginLeft: 2 }}
                        >
                          <MenuItem value="open">Open</MenuItem>
                          <MenuItem value="pending">Pending</MenuItem>
                          <MenuItem value="inprog">In Progress</MenuItem>
                          <MenuItem value="complete">Complete</MenuItem>
                        </Select>
                      </>
                    }
                  >
                    <ListItemText primary={task.title} />
                  </ListItem>
                ))}
            </List>
            <AddTaskForm addTask={addTask} status={status} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default TaskBoard;
