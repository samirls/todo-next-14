"use client";

import {
  Box,
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
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { addFriend } from "@/app/lib/actions";
import { ChangeEvent, FormEvent } from "react";
import { useMediaQuery } from "@chakra-ui/react";

interface AddFriendModalProps {
  userId: number | undefined;
}

function AddFriendModal({ userId }: AddFriendModalProps) {
  const [isLargerThan800] = useMediaQuery("(min-width: 992px)");
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [addedFriendId, setAddedFriendId] = useState("");
  const toast = useToast();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      if (addedFriendId === "") {
        return toast({
          title: "Insert the Id of your friend, must be a number",
          position: "top",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }

      const addedFriendIdAsNumber = parseInt(addedFriendId);

      if (isNaN(addedFriendIdAsNumber)) {
        return toast({
          title: "Invalid Id format. Please enter a valid number.",
          position: "top",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }

      setIsLoading(true);
      await addFriend(userId, addedFriendIdAsNumber);
      setIsLoading(false);
      setAddedFriendId("");
      toast({
        title: "Friend Added!",
        position: "top",
        description: "Add another one.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      onClose();
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Error",
        description: `Error: ${error}`,
        position: "top",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      console.log(error);
    }
  };

  return (
    <Box>
      <Button
        leftIcon={<IoMdAddCircle />}
        colorScheme="green"
        variant="solid"
        onClick={onOpen}
      >
        Add Friend
      </Button>
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
          <ModalHeader>Add a New Friend</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Id:</FormLabel>
              <Input
                ref={initialRef}
                onChange={(e) => {
                  setAddedFriendId(e.target.value);
                }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="green"
              mr={3}
              isLoading={isLoading}
              loadingText="Submitting"
              onClick={handleSubmit}
            >
              Add Friend
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default AddFriendModal;
