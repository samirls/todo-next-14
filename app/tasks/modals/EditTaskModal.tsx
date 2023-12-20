"use client";

import { editTask } from "@/app/lib/actions";
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
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ChangeEvent, FormEvent } from "react";

interface TaskProps {
  task: singleTask;
  isOpen: boolean;
  onClose: () => void;
}

interface singleTask {
  task_id: number;
  task: string;
  task_user_id: number;
  task_user_name: string;
}

function EditTaskModal({task, isOpen, onClose}:TaskProps) {
  const [isLargerThan800] = useMediaQuery('(min-width: 992px)')
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const [editedTask, setEditedTask] = useState(task.task);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditedTask(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (editedTask === "") {
      return toast({
          title: 'Task must have a description',
          position: 'top',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
    }
    setIsLoading(true)

    await editTask(task.task_id, editedTask);

    setIsLoading(false)
    toast({
      title: 'Task Edited!',
      position: 'top',
      status: 'success',
      duration: 4000,
      isClosable: true,
    })
    onClose();
  };

  useEffect(() => {
    setEditedTask(task.task)
  }, [task.task, isOpen])

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={isLargerThan800 ? 'xl' : 'xs'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <FormControl>
              <FormLabel>New Description</FormLabel>
              <Input
                ref={initialRef}
                onChange={handleChange}
                value={editedTask}
                required
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" mr={3} isLoading={isLoading} loadingText='Editing' onClick={handleSubmit}>
              Edit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditTaskModal;
