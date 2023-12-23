"use client";

import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
  Select,
  Tag,
  TagLabel,
  TagCloseButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { shareTask } from "@/app/lib/actions";
import { ChangeEvent, FormEvent } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";


interface TaskProps {
  task: singleTask;
  friends: singleFriend[];
  isOpen: boolean;
  onClose: () => void;
}

interface singleTask {
  task_id: number;
  task: string;
  task_user_id: number;
  task_user_name: string;
}

interface singleFriend {
  user_id: number;
  name: string;
}

function ShareTaskModal({ task, friends, isOpen, onClose }: TaskProps) {
  const [isLargerThan800] = useMediaQuery("(min-width: 992px)");
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedFriends, setSelectedFriends] = useState<singleFriend[]>([]);
  const toast = useToast();

  const selectSingleFriend = (event:  ChangeEvent<HTMLSelectElement>) => {
    const selectedUserId = parseInt(event.target.value);
    const selectedFriend = friends.find(
      (friend) => friend.user_id === selectedUserId
    );
    
    if (selectedFriend && !selectedFriends.some((friend) => friend.user_id === selectedUserId)) {
      setSelectedFriends([...selectedFriends, selectedFriend]);
    }
  }

  const removeSingleFriend = (id: number) => {
    const updatedFriends = selectedFriends.filter(
      (friend) => friend.user_id !== id
    );
    setSelectedFriends(updatedFriends);
  }

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      const selectedUserIds = selectedFriends.map((friend) => friend.user_id);

      await shareTask(task.task_id, selectedUserIds);

      toast({
        title: "Task shared successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      onClose();
    } catch (error) {
      console.error("Error sharing task:", error);
      toast({
        title: "Error sharing task",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={isLargerThan800 ? "xl" : "xs"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Share this task with one or more friends</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {friends.length === 0 ? (
            <Box fontSize="1.2rem">
              <Box>You need to add a friend first.</Box>
              <Box>
                Add a friend <Link href="/friends">clicking here.</Link>
              </Box>
            </Box>
          ) : (
            <Box fontSize="1.2rem">
              <Select placeholder="Select a friend" onChange={selectSingleFriend}>
                {friends.map((friend, index) => (
                  <option key={index} value={friend.user_id}>{friend.name.toUpperCase()}, Id: {friend.user_id}</option>
                ))}
              </Select>
              <Box>
              {selectedFriends.map((friend, index) => (
                <Box key={index} pt='10px'>
                  <Tag
                    size='md'
                    borderRadius='full'
                    variant='solid'
                    colorScheme='green'
                  >
                    <TagLabel>{friend?.name.toUpperCase()}, Id: {friend?.user_id}</TagLabel>
                    <TagCloseButton onClick={() => removeSingleFriend(friend?.user_id)}/>
                  </Tag>
                </Box>
              ))}
              </Box>
            </Box>
          )}
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="teal"
            mr={3}
            isLoading={isLoading}
            loadingText="Submitting"
            onClick={handleSubmit}
          >
            Save and Share
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ShareTaskModal;
