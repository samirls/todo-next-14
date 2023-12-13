import React from "react";
import { fetchTasks } from "../lib/data";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import Task from "./Task";
import AddTaskModal from "./modals/AddTaskModal";

async function Todos() {
  const fetchedTasks = await fetchTasks();

  console.log(fetchedTasks);

  return (
    <Box>
      <Box
        fontSize="2rem"
        fontWeight="500"
        display="flex"
        justifyContent="center"
        pt="50px"
      >
        Tasks
      </Box>
      <Box pl='100px' py='10px'>
        <AddTaskModal />
      </Box>
      <Box >
        {fetchedTasks.map((task) => (
          <Task key={task.task_id} task={task} />
        ))}
      </Box>
    </Box>
  );
}

export default Todos;
