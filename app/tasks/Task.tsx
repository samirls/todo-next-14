'use client'

import { Box, Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import DeleteTaskModal from "./modals/DeleteTaskModal";
import EditTaskModal from "./modals/EditTaskModal";

interface TaskProps {
  task: singleTask;
}

interface singleTask {
  task_id: number;
  task: string;
  user_id: number;
  user_name: string;
}


function Task({task}:TaskProps) {

  const { isOpen: isEditModalOpen, onOpen: onEditModalOpen, onClose: onEditModalClose } = useDisclosure();
  const { isOpen: isDeleteModalOpen, onOpen: onDeleteModalOpen, onClose: onDeleteModalClose } = useDisclosure();

  console.log(task)

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height="60px"
      mx={{base: '10px', lg:"100px"}}
      px={{base: '5px', lg: "15px"}}
      boxShadow="md"
      borderRadius="lg"
      border='1px'
      borderColor='gray.100'
      mb='15px'
    >
      <Box>
        <Box fontSize={{base: '1rem', lg:"1.2rem"}}>{task.task}</Box>
        <Box fontSize={{base: '0.8rem', lg:"1rem"}} color='gray.400'>Made by user {task.user_name}</Box>
      </Box>
      <Box display="flex" gap={{base: 1, lg: 6}} fontSize={{base: '1rem', lg:"1.2rem"}}>
        <Button colorScheme="purple" onClick={onEditModalOpen} size='sm'>Edit</Button>
        <EditTaskModal isOpen={isEditModalOpen} onClose={onEditModalClose} task={task}/>
        <Button colorScheme="red" onClick={onDeleteModalOpen} size='sm'>Delete</Button>
        <DeleteTaskModal isOpen={isDeleteModalOpen} onClose={onDeleteModalClose} task={task}/>
      </Box>
    </Box>
  );
}

export default Task;
