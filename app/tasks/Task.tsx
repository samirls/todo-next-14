"use client";

import { Box, Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import DeleteTaskModal from "./modals/DeleteTaskModal";
import EditTaskModal from "./modals/EditTaskModal";
import ShareTaskModal from "./modals/ShareTaskModal";

interface TaskProps {
  task: singleTask;
  friends: singleFriend[];
  fetchedLinkTable: singleFetchedLinkTable[];
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

interface singleFetchedLinkTable {
  user_id_link: number;
  name: string;
  user_task_link_id: number;
  task_id_link: number;
}

function Task({ task, friends, fetchedLinkTable }: TaskProps) {
  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure();
  const {
    isOpen: isDeleteModalOpen,
    onOpen: onDeleteModalOpen,
    onClose: onDeleteModalClose,
  } = useDisclosure();
  const {
    isOpen: isShareModalOpen,
    onOpen: onShareModalOpen,
    onClose: onShareModalClose,
  } = useDisclosure();

  const shouldRenderShareButton = () => {
    const taskIdsInLinkTable = fetchedLinkTable.map(
      (link) => link.task_id_link
    );
    return !taskIdsInLinkTable.includes(task.task_id);
  };

  const sharedUsers = fetchedLinkTable
  .filter((link) => link.task_id_link === task.task_id)
  .map((link) => link.name);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height="60px"
      mx={{ base: "10px", lg: "100px" }}
      px={{ base: "5px", lg: "15px" }}
      boxShadow="md"
      borderRadius="lg"
      border="1px"
      borderColor="gray.100"
      mb="15px"
    >
      <Box>
        <Box fontSize={{ base: "1rem", lg: "1.2rem" }}>{task.task}</Box>
        <Box fontSize={{ base: "0.8rem", lg: "1rem" }} color="gray.500">
          Created by user{" "}
          <Box as="span" fontWeight={500}>
            {task?.task_user_name.toUpperCase()}.
          </Box> {sharedUsers.length === 0 ? (
            "Not shared"
          ) : (
            <>Shared to user: <Box as="span" fontWeight={500}>{sharedUsers.join(", ").toUpperCase()}</Box></>
          ) }
        </Box>
      </Box>
      <Box
        display="flex"
        gap={{ base: 1, lg: 6 }}
        fontSize={{ base: "1rem", lg: "1.2rem" }}
      >
        {shouldRenderShareButton() && (
          <Button colorScheme="teal" onClick={onShareModalOpen} size="sm">
            Share
          </Button>
        )}
        <ShareTaskModal
          isOpen={isShareModalOpen}
          onClose={onShareModalClose}
          task={task}
          friends={friends}
        />
        <Button colorScheme="purple" onClick={onEditModalOpen} size="sm">
          Edit
        </Button>
        <EditTaskModal
          isOpen={isEditModalOpen}
          onClose={onEditModalClose}
          task={task}
        />
        <Button colorScheme="red" onClick={onDeleteModalOpen} size="sm">
          Delete
        </Button>
        <DeleteTaskModal
          isOpen={isDeleteModalOpen}
          onClose={onDeleteModalClose}
          task={task}
        />
      </Box>
    </Box>
  );
}

export default Task;
