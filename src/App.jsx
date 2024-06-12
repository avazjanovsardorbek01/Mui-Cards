import React from "react";
import { Container, Typography, Box } from "@mui/material";
import TaskBoard from "./components/TaskBoard";

const App = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ padding: 4, backgroundColor: "#f5f5f5s", minHeight: "100vh" }}
    >
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" gutterBottom>
          Cards
        </Typography>
      </Box>
      <TaskBoard />
    </Container>
  );
};

export default App;
