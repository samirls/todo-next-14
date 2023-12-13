"use client";

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { createTask, deleteTask } from "@/app/lib/actions";

interface TaskProps {
  task: singleTask;
  isOpen: boolean;
  onClose: () => void;
}

interface singleTask {
  task_id: number;
  task: string;
  user_id: number;
}

function DeleteTaskModal({task, isOpen, onClose}:TaskProps) {

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleDeleteTask = async () => {
    setIsLoading(true)
    await deleteTask(task.task_id);
    setIsLoading(false)
    toast({
      title: 'Task Deleted!',
      position: 'top',
      status: 'success',
      duration: 4000,
      isClosable: true,
    })
  };


  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure you want to delete this Task?</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>{task.task}</FormLabel>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} isLoading={isLoading} loadingText='Deleting' onClick={handleDeleteTask}>
              Delete
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeleteTaskModal;
