import React from "react";
import { fetchTasks } from "../lib/data";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import Task from "./Task";
import AddTaskModal from "./modals/AddTaskModal";

async function Tasks() {
  const fetchedTasks = await fetchTasks();

  return (
    <Box pb={{base: '110px', lg:"150px"}}>
      <Box
        fontSize="2rem"
        fontWeight="500"
        display="flex"
        justifyContent="center"
        pt={{ base: "150px", lg: "170px" }}
      >
        Tasks
      </Box>
      <Box pl={{base: '10px', lg:'100px'}} py='10px'>
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

export default Tasks;
