'use client'

import { Box, Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import DeleteTaskModal from "./modals/DeleteTaskModal";

interface TaskProps {
  task: singleTask;
}

interface singleTask {
  task_id: number;
  task: string;
  user_id: number;
}


function Task({task}:TaskProps) {

  const { isOpen, onOpen, onClose } = useDisclosure();



  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height="60px"
      mx="100px"
      px="15px"
      boxShadow="md"
      borderRadius="lg"
    >
      <Box fontSize="1.2rem">{task.task}</Box>
      <Box display="flex" gap={6}>
        <Button colorScheme="purple">Edit</Button>
        <Button colorScheme="red" onClick={onOpen}>Delete</Button>
        <DeleteTaskModal isOpen={isOpen} onClose={onClose} task={task}/>
      </Box>
    </Box>
  );
}

export default Task;
